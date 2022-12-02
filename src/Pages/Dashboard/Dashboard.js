import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [userRole, setUserRole] = useState('');

    fetch(`https://recycle-phone-server-six.vercel.app/users/${user.email}`)
        .then(res => res.json())
        .then(data => setUserRole(data.userRole));

    return (
        <div className='min-h-screen w-full flex items-start py-5 justify-center bg-gradient-to-r from-red-200 to-sky-200'>
            <div>
                <h1 className='text-3xl text-center font-bold'>User Profile</h1>
                <div className="card bg-base-100 shadow-xl my-5">
                    <figure className="px-10 pt-10">
                        <img src={user?.photoURL || 'https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg'} alt="Avatar" className="mask mask-hexagon" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name : {user?.displayName}</h2>
                        <p>Email : {user?.email}</p>
                        <p className='font-bold text-green-500 text-lg'>{userRole}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;