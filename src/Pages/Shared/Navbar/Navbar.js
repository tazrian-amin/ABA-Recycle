import React, { useContext } from 'react';
import logo from '../../../logo.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faHouse, faMobile, faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const menuItems = <>
        <li><Link to="/" className='bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 text-black hover:font-semibold border border-black rounded-md lg:mr-3'><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> Home</Link></li>
        <li><Link to="/phones" className='bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 text-black hover:font-semibold border border-black rounded-md lg:mr-3'><FontAwesomeIcon icon={faMobile}></FontAwesomeIcon> Phones</Link></li>
        {user?.uid ?
            <>
                <li><Link to="/dashboard" className='bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 text-black hover:font-semibold border border-black rounded-md lg:mr-3'><FontAwesomeIcon icon={faDashboard}></FontAwesomeIcon> Dashboard</Link></li>
                <li><button onClick={handleLogOut} className="btn bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 border border-black rounded-md hover:font-bold text-black"><FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon> Logout</button></li>
            </>
            : <li><Link to="/login" className='bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 text-black hover:font-semibold border border-black rounded-md'><FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon> Login</Link></li>}

    </>

    return (
        <div className="navbar border-b border-black flex justify-between px-3 text-white" style={{ background: 'linear-gradient(135deg,#e00074,#2f1672 33%,#0b1b72 60%,#0966a6 82%,#07e0fa)' }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn bg-gradient-to-r from-red-200 to-sky-200 hover:from-red-300 hover:to-sky-300 text-black hover:font-semibold rounded-md lg:hidden">
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
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;