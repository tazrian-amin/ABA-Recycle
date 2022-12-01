import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero md:min-h-[400px]" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1574763788197-1808b6ac8142?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80")` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="md:w-4/5 mx-auto">
                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold"><span className='text-orange-600'>A</span>ndroid.<span className='text-orange-600'>B</span>utton.<span className='text-orange-600'>A</span>pple</h1>
                    <p className="mb-5">A.B.A - Recycle Phone is an open platform to buy & sell used phones with the best possible deal.</p>
                    <Link to='/' className="btn bg-gradient-to-r from-red-200 to-sky-200 rounded-md hover:font-bold text-black">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;