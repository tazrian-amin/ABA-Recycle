import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, googleSignIn } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleSignUp = (data) => {
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully!');
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err)
                setSignUPError(err.message)
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
        <div className='w-full md:w-1/2 md:mx-auto p-10 md:border md:rounded md:my-10 bg-gradient-to-r from-orange-100 via-blue-300 to-pink-300 md:border-black'>
            <h2 className='text-2xl font-bold text-center'>Register</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is required"
                    })} className="input input-bordered w-full" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input type="password" {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must have 6 characters or more" },
                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must contain an uppercase, a number, and a special character' }
                    })} className="input input-bordered w-full" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>
                <input className='mt-5 mb-2 btn w-full bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 rounded-md hover:font-bold text-black' value="Register" type="submit" />
                {signUpError && <p className='text-red-600'>{signUpError}</p>}
            </form>
            <p className='text-sm'>Already have an account? Login <Link className='text-red-700 underline hover:font-semibold' to="/login">here</Link></p>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className='btn w-full bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 rounded-md hover:font-bold text-black'>CONTINUE WITH GOOGLE</button>

        </div>
    );
};

export default Register;