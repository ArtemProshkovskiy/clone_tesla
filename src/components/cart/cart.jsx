import React from 'react';
import './cart.css';
function Cart(props) {
     const { imageSrc, title, description, price } = props.product;

    return (
        <div className="cart-product">
            <img src={imageSrc} alt={title} className="product-image" />
            <h2 className="product-title">{title}</h2>
            <p className="product-description">{description}</p>
            <p className="product-price">${price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
        </div>
    );
}

export default Cart;