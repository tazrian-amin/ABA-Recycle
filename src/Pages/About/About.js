import React from 'react';
import useTitle from '../../hooks/useTitle';

const About = () => {

    useTitle('About');

    return (
        <div className="hero min-h-screen w-full mx-auto" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-full">
                    <h1 className="text-5xl font-bold leading-relaxed">About Us</h1>
                    <p className='py-4 text-lg font-semibold'>ABA Recycle Phone is a platform to sell or buy used phones.</p>
                </div>
            </div>
        </div>
    );
};

export default About;