import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import useTitle from '../hooks/useTitle';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {

    useTitle('Dashboard');
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content bg-slate-50">
                        <li><Link to="/dashboard">User Profile</Link></li>
                        {
                            isBuyer && <>
                                <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                                <li><Link to="/dashboard/myWishlist">My Wishlist</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to="/dashboard/sell">Add a product</Link></li>
                                <li><Link to={`/dashboard/myProducts/${user.email}`}>My Products</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/sellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/buyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/reports">Reported Items</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;