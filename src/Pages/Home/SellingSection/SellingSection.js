import React from 'react';
import { Link } from 'react-router-dom';

const SellingSection = () => {
    return (
        <div className="hero bg-gradient-to-r from-orange-100 via-blue-300 to-pink-300 border border-black w-4/5 mx-auto rounded-none md:rounded-md my-10">
            <div className="hero-content flex-col lg:flex-row">
                <img className='w-1/2 lg:w-1/5 rounded-md' src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" alt='selling img' />

                <div className='text-center lg:text-left'>
                    <h1 className="text-4xl md:text-5xl pt-4 font-bold">Sell Your Phone!</h1>
                    <p className="py-6 text-lg font-semibold">Provide your information and register. Give your selling posts and reach out to hundreds of buyers!</p>
                    <Link to='/dashboard/sell' className="btn bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 rounded-md hover:font-bold text-black">Start Selling</Link>
                </div>
            </div>
        </div>
    );
};

export default SellingSection;