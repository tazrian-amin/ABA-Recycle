import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const TermsAndConditions = () => {

    useTitle('Terms & Conditions');

    return (
        <div className="hero min-h-screen w-full mx-auto" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-right text-neutral-content">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold leading-relaxed">Terms & Conditions</h1>
                    <ul>
                        <li>ABA Recycle will not be liable for any fraud case.</li>
                        <li>Buyers can report about any seller if needed.</li>
                        <li>Admin has the right to remove any post or any user.</li>
                    </ul>
                    <p className='py-4 text-lg font-semibold'>Back to <Link to='/' className='underline'>Home</Link></p>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;