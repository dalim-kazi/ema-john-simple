import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='header-div'>
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/Orders">Orders</NavLink>
                <NavLink to="/Inventory">Inventory</NavLink>
                <NavLink to="/About">About</NavLink>
                {
                    user?.uid ? <button className='logout-btn' onClick={logOut}>Log out</button> :
                        <>
                        <NavLink to="/login">Log in</NavLink>
                        <NavLink to="/singup">Sing up</NavLink>
                        </>
                }
            </div>
         </nav>
    );
};

export default Header;