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


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path: '/sell',
                element: <Sell></Sell>
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
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])

export default router;