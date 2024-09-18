import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Axios from 'axios'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter, Link} from "react-router-dom";
import env from "react-dotenv";

function NavBar(props) {
    const [count, setCount] = useState(0);
    const [stream, setStream] = useState(null);
    const pseudo = props.cookies.user.data[0].login;
    const [expanded, setExpanded] = useState(false);
    const list = document.querySelectorAll(".list");

    function activeLink() {
        list.forEach((item) => item.classList.remove('active'));
        this.classList.add('active');
    };
    
    list.forEach((item) => {
        item.addEventListener('click', activeLink)
    });
    return (
        <div className="navbar">
            <ul>
                <li className="list active">
                    <a href={"#"}>
                    <span className="icon">
                        <ion-icon name="home-outline"></ion-icon>
                    </span>
                        <span className="text">Home</span>
                    </a>
                </li>
                <li className="list">
                    <a href={"#"}>
                    <span className="icon">
                        <ion-icon name="person-outline"></ion-icon>
                    </span>
                        <span className="text">Profile</span>
                    </a>
                </li>
                <li className="list">
                    <a href={"#"}>
                    <span className="icon">
                        <ion-icon name="chatbubble-outline"></ion-icon>
                    </span>
                        <span className="text">Message</span>
                    </a>
                </li>
                <li className="list">
                    <a href={"#"}>
                    <span className="icon">
                        <ion-icon name="camera-outline"></ion-icon>
                    </span>
                        <span className="text">Photos</span>
                    </a>
                </li>
                <li className="list">
                    <a href={"#"}>
                    <span className="icon">
                        <ion-icon name="settings-outline"></ion-icon>
                    </span>
                        <span className="text">Settings</span>
                    </a>
                </li>
                <div className="bubble"></div>
            </ul>
        </div>
    );
}

export default NavBar;