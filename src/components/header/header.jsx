import React from 'react';
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <div className="container">
                <nav>
                    <ul>
                        <li className='header_item first'>
                            <NavLink to="/">TESLA</NavLink>
                        </li>

                        <li className='header_item'>
                            <NavLink to="/model_s">Model S</NavLink>
                        </li>
                        <li className='header_item'>
                            <NavLink to="/model_x">Model X</NavLink>
                        </li>
                        <li className='header_item'>
                            <NavLink to="/cybertrack">Cybertrack</NavLink>
                        </li>
                        <li className='header_item'>
                            <NavLink to="/shop">Shop</NavLink>
                        </li>

                        <li className='header_item last'>
                            <span>Menu</span>
                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/512/1374/1374128.png" alt=""/>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;