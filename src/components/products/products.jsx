import React from 'react';
import Cart from './../cart/cart'; // Adjust the path to match your project structure
import './products.css'
import {useDispatch} from "react-redux";
import {addToCart} from "../../features/shopingCart/shoppingCartSlice";

function Carts(props) {
    const products = [
        {
            id: 1,
            imageSrc: require('../../assets/model-s.jpg'),
            title: 'Model S',
            description: 'Description for Product 1',
            price: 19.99,
        },
        {
            id: 2,
            imageSrc: require('../../assets/model-x.jpg'),
            title: 'Model X',
            description: 'Description for Product 2',
            price: 29.99,
        },
        {
            id: 3,
            imageSrc: require('../../assets/tesla-charger.jpg'),
            title: 'Tesla-charger',
            description: 'Description for Product 2',
            price: 29.99,
        },
        {
            id: 4,
            imageSrc: require('../../assets/cybertruck.jpg'),
            title: 'Cybertruck',
            description: 'Description for Product 2',
            price: 29.99,
        },
        {
            id: 5,
            imageSrc: require('../../assets/tesla-charger.jpg'),
            title: 'Tesla-charger 2',
            description: 'Description for Product 2',
            price: 29.99,
        },
        {
            id: 6,
            imageSrc: require('../../assets/cybertruck.jpg'),
            title: 'Cybertruck 1',
            description: 'Description for Product 2',
            price: 29.99,
        },
              {
            id: 6,
            imageSrc: require('../../assets/cybertruck.jpg'),
            title: 'Cybertruck 1',
            description: 'Description for Product 2',
            price: 29.99,
        },
              {
            id: 6,
            imageSrc: require('../../assets/cybertruck.jpg'),
            title: 'Cybertruck 1',
            description: 'Description for Product 2',
            price: 29.99,
        },
              {
            id: 6,
            imageSrc: require('../../assets/cybertruck.jpg'),
            title: 'Cybertruck 1',
            description: 'Description for Product 2',
            price: 29.99,
        },

    ];

    return (
        <div className="carts">
            {products.map(product => (
                <Cart  key={product.id} product={product}/>
            ))}
        </div>
    );
}

export default Carts;
