import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../logo.svg';
import logoText from '../Typogramme_Rouge.svg';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <img src={logoText} alt="logo"/>
                </div>
                <div className="nav-elements">
                <ul>
                        <li>
                            <NavLink to="/">Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink to="/stream">Stream</NavLink>
                        </li>
                        <li>
                            <NavLink to="/team">Les streamer.euses</NavLink>
                        </li>
                        <li>
                            <NavLink to="/planing">Le planing</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
