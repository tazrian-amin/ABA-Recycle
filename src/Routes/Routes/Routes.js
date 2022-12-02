import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import Register from '../../Pages/Register/Register';
import About from '../../Pages/About/About';
import Blog from '../../Pages/Blog/Blog';
import TermsAndConditions from '../../Pages/TermsAndConditions/TermsAndConditions';
import PageNotFound from '../../Pages/PageNotFound/PageNotFound';
import PhoneByCategory from '../../Pages/PhoneByCategory/PhoneByCategory';
import Phones from '../../Pages/Phones/Phones';
import Sell from '../../Pages/Sell/Sell';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import DashboardLayout from '../../Layout/DashboardLayout';
import DisplayError from '../../Pages/Shared/DisplayError/DisplayError';
import MyOrders from '../../Pages/MyOrders/MyOrders';
import MyWishlist from '../../Pages/MyWishlist/MyWishlist';
import UserList from '../../Pages/Shared/UserList/UserList';
import Reports from '../../Pages/Reports/Reports';
import BuyerRoute from '../BuyerRoute/BuyerRoute';
import SellerRoute from '../SellerRoute/SellerRoute';
import AdminRoute from '../AdminRoute/AdminRoute';
import Payment from '../../Pages/Payment/Payment';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import MyProducts from '../../Pages/MyProducts/MyProducts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/phones',
                element: <Phones></Phones>,
                loader: () => fetch('http://localhost:5000/phones')
            },
            {
                path: '/phones/category/:name',
                element: <PhoneByCategory></PhoneByCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/phones/category/${params.name}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myOrders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/myWishlist',
                element: <BuyerRoute><MyWishlist></MyWishlist></BuyerRoute>
            },
            {
                path: '/dashboard/sell',
                element: <SellerRoute><Sell></Sell></SellerRoute>
            },
            {
                path: '/dashboard/myProducts/:email',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/phones/${params.email}`)
            },
            {
                path: '/dashboard/sellers',
                element: <AdminRoute><UserList></UserList></AdminRoute>
            },
            {
                path: '/dashboard/buyers',
                element: <AdminRoute><UserList></UserList></AdminRoute>
            },
            {
                path: '/dashboard/reports',
                element: <AdminRoute><Reports></Reports></AdminRoute>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])

export default router;