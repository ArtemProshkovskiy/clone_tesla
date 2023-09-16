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
import {Provider} from 'react-redux'; // Import Provider from 'react-redux'
import {store} from "./global-state/store";
import ShoppingCart from "./pages/shopingCart";

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
    {
        path: "/shopping_cart",
        element: <ShoppingCart/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}> </RouterProvider>
    </Provider>
);
