import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Sell = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const handleSellPhone = (data) => {

        const posting_time = new Date();

        const phoneData = {
            category: data.category,
            name: data.name,
            photo: data.photo,
            price: {
                original: data.original,
                resale: data.resale
            },
            usage: data.usage,
            seller: {
                name: data.seller_name,
                location: data.location
            },
            email: data.email,
            posting_time: posting_time
        }

        fetch('http://localhost:5000/phones', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(phoneData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Your selling post was successfully added!');
                    navigate(`/dashboard/myProducts/${user.email}`);
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleSellPhone)} className='w-full md:w-4/5 px-5 mx-auto rounded-none md:rounded-md border-y-2 md:border-2 border-neutral my-10 py-10'>
                <h1 className="text-5xl font-bold text-center pb-5">Form</h1>
                <div className='flex flex-col lg:flex-row items-center justify-evenly my-5'>
                    <div className="form-control btn bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 rounded-md hover:font-bold text-black w-full lg:w-1/5">
                        <label className="label cursor-pointer">
                            <span className="label-text mr-2">Android</span>
                            <input type="radio" {...register("category")} value={'Android'} className="radio bg-white checked:bg-success" required />
                        </label>
                    </div>

                    <div className="form-control btn bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 rounded-md hover:font-bold text-black w-full lg:w-1/5 my-4">
                        <label className="label cursor-pointer">
                            <span className="label-text mr-2">Button</span>
                            <input type="radio" {...register("category")} value={'Button'} className="radio bg-white checked:bg-success" required />
                        </label>
                    </div>

                    <div className="form-control btn bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 rounded-md hover:font-bold text-black w-full lg:w-1/5">
                        <label className="label cursor-pointer">
                            <span className="label-text mr-2">Apple</span>
                            <input type="radio" {...register("category")} value={'Apple'} className="radio bg-white checked:bg-success" required />
                        </label>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-4'>
                    <label className="input-group input-group-vertical">
                        <span>Device Name</span>
                        <input {...register("name")} type="text" placeholder="Device Model" className="input input-bordered w-full" required />
                    </label>

                    <label className="input-group input-group-vertical">
                        <span>Device Photo URL</span>
                        <input {...register("photo")} type="text" placeholder="Photo URL of Your Device" className="input input-bordered w-full" required />
                    </label>

                    <label className="input-group input-group-vertical">
                        <span>Original Price</span>
                        <input {...register("original")} type="number" placeholder="Price in BDT" className="input input-bordered w-full" required />
                    </label>

                    <label className="input-group input-group-vertical">
                        <span>Resale Price</span>
                        <input {...register("resale")} type="number" placeholder="Price in BDT" className="input input-bordered w-full" required />
                    </label>

                    <label className="input-group input-group-vertical">
                        <span>Usage</span>
                        <input {...register("usage")} type="text" placeholder="Duration of usage" className="input input-bordered w-full" required />
                    </label>

                    <label className="input-group input-group-vertical">
                        <span>Seller Name</span>
                        <input {...register("seller_name")} type="text" placeholder="Full Name" defaultValue={user?.displayName} className="input input-bordered w-full" required />
                    </label>

                    <label className="input-group input-group-vertical">
                        <span>Email</span>
                        <input {...register("email")} type="text" placeholder="Seller Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                    </label>

                    <label className="input-group input-group-vertical">
                        <span>Location</span>
                        <input {...register("location")} type="text" placeholder="Area of Collection" className="input input-bordered w-full" required />
                    </label>
                </div>

                <input className='btn w-full bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 rounded-md hover:font-bold text-black' type="submit" value="Add Post" />
            </form>
        </div>
    );
};

export default Sell;