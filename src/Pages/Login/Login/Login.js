import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
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
                saveUser(user.displayName, user.email, 'Buyer');
            })
            .catch(err => {
                console.error(err);
                toast.error(err.message);
            })
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };

        fetch('https://recycle-phone-server-six.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLoginUserEmail(email);
            })
    }

    return (
        <div className='w-full md:w-1/2 md:mx-auto p-10 md:border md:rounded md:my-10 md:border-black text-white' style={{ background: 'linear-gradient(135deg,#e00074,#2f1672 33%,#0b1b72 60%,#0966a6 82%,#07e0fa)' }}>
            <h2 className='text-2xl font-bold text-center'>Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text text-white">Email</span></label>
                    <input type="text"
                        {...register("email", {
                            required: "Email is required"
                        })}
                        className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text text-white">Password</span></label>
                    <input type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must have 6 characters or more' }
                        })}
                        className="input input-bordered w-full" />
                    {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                </div>
                <input className='mt-5 mb-2 btn w-full bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 rounded-md hover:font-bold text-black' value="Login" type="submit" />
                <div>
                    {loginError && <p className='text-red-500'>{loginError}</p>}
                </div>
            </form>
            <p className='text-sm'>New to ABA Recycle Phone? Register <Link className='text-red-700 underline hover:font-semibold' to="/register">here</Link></p>
            <div className="divider">Or,</div>
            <div>
                <button onClick={handleGoogleSignIn} className='btn w-full bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 rounded-md hover:font-bold text-black'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;