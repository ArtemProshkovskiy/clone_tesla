import React from 'react';
import Header from "../components/header/header";
import Carts from "../components/products/products";


function Shop(props) {
    return (
        <div className='shop_back'>
           <Header></Header>
            <div>
                <Carts></Carts>
            </div>
        </div>
    );
}

export default Shop;