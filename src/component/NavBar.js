import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../logo.svg';
import logoText from '../Typogramme_Rouge.svg';
import burger from '../menu-burger.png'

function NavBar() {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <img src={logoText} alt="logo"/>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <img style={{width: "30px"}} src={burger} alt="logo"/>
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
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
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
