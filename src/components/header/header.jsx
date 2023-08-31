import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';
import Menu from "../menu/menu";

function Header() {
    const [showClass, setShowClass] = useState(false);

    function closeMenu() {
        setShowClass(false)
    }

    return (
        <>
            <div className='header'>
                <div className="container">
                    <nav>
                        <ul>
                            <li className='header_item first'>
                                <NavLink to="/">TESLA</NavLink>
                            </li>

                            <li className='header_item center'>
                                <NavLink to="/model_s">Model S</NavLink>
                            </li>
                            <li className='header_item center'>
                                <NavLink to="/model_x">Model X</NavLink>
                            </li>
                            <li className='header_item center'>
                                <NavLink to="/cybertrack">Cybertrack</NavLink>
                            </li>
                            <li className='header_item center'>
                                <NavLink to="/shop">Shop</NavLink>
                            </li>

                            <li className='header_item last'>
                                <div>
                                    <span>0</span>
                                    <img src={require('../../assets/shopping-cart-256.png')} alt=""/>
                                </div>
                                <span onClick={() => setShowClass(true)} className='header_menu'>Menu</span>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
            <Menu closeMenu={closeMenu} showClass={showClass}></Menu>
        </>
    );
}

export default Header;