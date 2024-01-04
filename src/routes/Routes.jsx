import React from 'react';

import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../components/Layout/Main';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Career from '../components/Career/Career';
import Category from '../components/Home/Category/Category';
import NewsLayout from '../components/Layout/NewsLayout';
import News from '../components/News/News/News';
import LoginLayout from '../components/Layout/LoginLayout';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import PrivateRoute from '../components/UserAccessOnly/PrivateRoute';
import TermsConditions from '../components/terms/TermsConditions';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/categories/0'></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <SignUp></SignUp>
            },
            {
                path: "terms",
                element: <TermsConditions></TermsConditions>
            }
        ]
    },
    {
        path: "categories",
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-protapsaha1.vercel.app/categories/${params.id}`)
            },
            // {
            //     path: ":about",
            //     element: <About></About>
            // },
            // {
            //     path: ":career",
            //     element: <Career></Career>
            // }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-protapsaha1.vercel.app/news/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

]);

export default router;


/*
{
                path: "/",
                element: <Category></Category>,
                loader: () => fetch('https://the-dragon-news-server-protapsaha1.vercel.app/news/')
            },
*/