import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err);
                toast.error(err.message);
            })
    }

    return (
        <div className='w-full md:w-1/2 md:mx-auto p-10 md:border md:rounded md:mt-10'>
            <h2 className='text-2xl font-bold text-center'>Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="text"
                        {...register("email", {
                            required: "Email is required"
                        })}
                        className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must have 6 characters or more' }
                        })}
                        className="input input-bordered w-full" />
                    {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                </div>
                <input className='mt-5 mb-2 btn bg-orange-100 hover:bg-orange-400 hover:font-bold text-black hover:text-white w-full' value="Login" type="submit" />
                <div>
                    {loginError && <p className='text-red-500'>{loginError}</p>}
                </div>
            </form>
            <p className='text-sm'>New to ABA Recycle Phone? Register <Link className='text-orange-500 hover:font-semibold' to="/register">here</Link></p>
            <div className="divider">Or,</div>
            <div>
                <button onClick={handleGoogleSignIn} className='btn bg-orange-100 hover:bg-orange-400 hover:font-bold text-black hover:text-white w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;