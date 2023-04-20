import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import Main from '../components/Layout/Main';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Career from '../components/Career/Career';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/career",
                element: <Career></Career>
            }
        ]
    }
]);

export default router;