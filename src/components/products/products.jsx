import React from 'react';
import Cart from './../cart/cart'; // Adjust the path to match your project structure
import './products.css'
function Carts(props) {
    const products = [
        {
            id: 1,
            imageSrc: 'path-to-your-image1.jpg',
            title: 'Product 1',
            description: 'Description for Product 1',
            price: 19.99,
        },
        {
            id: 2,
            imageSrc: 'path-to-your-image2.jpg',
            title: 'Product 2',
            description: 'Description for Product 2',
            price: 29.99,
        },
         {
            id: 3,
            imageSrc: 'path-to-your-image2.jpg',
            title: 'Product 2',
            description: 'Description for Product 2',
            price: 29.99,
        },
         {
            id: 4,
            imageSrc: 'path-to-your-image2.jpg',
            title: 'Product 2',
            description: 'Description for Product 2',
            price: 29.99,
        },
         {
            id: 5,
            imageSrc: 'path-to-your-image2.jpg',
            title: 'Product 2',
            description: 'Description for Product 2',
            price: 29.99,
        },
           {
            id: 6,
            imageSrc: 'path-to-your-image2.jpg',
            title: 'Product 2',
            description: 'Description for Product 2',
            price: 29.99,
        },
    ];

    return (
        <div className="carts">
            {products.map(product => (
                <Cart key={product.id} product={product} />
            ))}
        </div>
    );
}

export default Carts;
