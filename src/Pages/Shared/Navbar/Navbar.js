import React, { useContext } from 'react';
import logo from '../../../logo.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const menuItems = <>
        <li><Link to="/" className='bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 hover:font-semibold rounded-md lg:mr-3'>Home</Link></li>

        {user?.uid ?
            <>
                <li><button onClick={handleLogOut} className="btn bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 rounded-md hover:font-bold text-black">Logout</button></li>
            </>
            : <li><Link to="/login" className='bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 hover:font-semibold rounded-md'>Login</Link></li>}

    </>

    return (
        <div className="navbar bg-gradient-to-r from-orange-100 via-blue-300 to-pink-300 flex justify-between px-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 hover:font-semibold rounded-md text-black lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className='flex lg:flex-col items-center justify-between cursor-pointer'>
                    <img className="w-10 mx-3 mask mask-hexagon" src={logo} alt="ABA logo" />
                    <h3 className="md:text-lg font-bold">Recycle Phone</h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;