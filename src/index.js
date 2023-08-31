import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/homepage";
import Model_s from "./pages/model_s";
import Model_x from "./pages/model_x";
import Cybertrack from "./pages/cybertrack";
import Shop from "./pages/shop";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>,
    },
    {
        path: "/model_s",
        element: <Model_s/>,
    },
    {
        path: "/model_x",
        element: <Model_x/>,
    },
    {
        path: "/cybertrack",
        element: <Cybertrack/>,
    },
    {
        path: "/shop",
        element: <Shop/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}> </RouterProvider>
    </React.StrictMode>
);
