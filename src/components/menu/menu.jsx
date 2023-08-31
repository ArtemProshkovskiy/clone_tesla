import React from 'react';
import {NavLink} from "react-router-dom";
import './menu.css'

function Menu(props) {

    const showMenu = props.showClass ? 'active-menu' : '';
    const showBlurredBackground = props.showClass ? 'blurred-background' : '';

    return (
            <div className={`menu_wrapper ${showMenu} ${showBlurredBackground}`}>
            <div className={`menu ${showMenu}`}>
                <div onClick={props.closeMenu} className='closeBtn'>
                    <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" alt=""/>
                </div>
                <nav>
                    <ul>
                        <li className='menu_item'>
                            <NavLink to="/">TESLA</NavLink>
                        </li>

                        <li className='menu_item'>
                            <NavLink to="/model_s">Model S</NavLink>
                        </li>
                        <li className='menu_item'>
                            <NavLink to="/model_x">Model X</NavLink>
                        </li>
                        <li className='menu_item'>
                            <NavLink to="/cybertrack">Cybertrack</NavLink>
                        </li>
                        <li className='menu_item'>
                            <NavLink to="/shop">Shop</NavLink>
                        </li>

                        <li className='menu_item'>
                            <div>
                                <span>0</span>
                                <img src="https://cdn-icons-png.flaticon.com/512/1374/1374128.png" alt=""/>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Menu;