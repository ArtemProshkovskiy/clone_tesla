import React from 'react';
import './cart.css';
import {useDispatch} from "react-redux";
import {addToCart} from "../../features/shopingCart/shoppingCartSlice";
import {nanoid} from "@reduxjs/toolkit";


function Cart(props) {

    const {imageSrc, title, description, price, id} = props.product;
    const dispatch = useDispatch();

    function addToCartItem(id, name, price) {
        dispatch(addToCart({
            id: id + nanoid,
            name: name,
            price: price
        }))
    }


    return (
        <div className="cart-product">
            <img src={imageSrc} alt={title} className="product-image"/>
            <h2 className="product-title">{title}</h2>
            <p className="product-description">{description}</p>
            <p className="product-price">${price}</p>
            <button onClick={() => addToCartItem(id, title, price)}
                    className="add-to-cart-button">Add to Cart
            </button>
        </div>
    );
}

export default Cart;

