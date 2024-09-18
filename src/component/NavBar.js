import React, {useEffect, useState} from 'react';
import logoTeam from "../equipe.png";

function ScriptNav({lat, long}) {
    return (
        <>
            <script async src="map-api.js" onLoad={() => console.log('script loaded')} />
            <div id="map" data-lat={lat} data-long={long} />
        </>
    );
}
function NavBar() {
    useEffect(() => {
        const list = document.querySelectorAll(".list");

        function activeLink() {
            list.forEach((item) => item.classList.remove('active'));
            this.classList.add('active');
        };

        list.forEach((item) => {
            item.addEventListener('click', activeLink)
        });
    }, []);
    return (
        <div className="navbar">
            <ul>
                <li className="list active">
                    <a href={"#"}>
                    <span className="icon">
                    <img style={{display: "block", margin: "auto", height: "60px"}} src={logoTeam}
                         className="App-logo-loader" alt="logo"/>
                    </span>
                        <span className="text">Acceuil</span>
                    </a>
                </li>
                <li className="list">
                <a href={"#"}>
                    <span className="icon">
                    <img style={{display: "block", margin: "auto", height: "60px"}} src={logoTeam}
                         className="App-logo-loader" alt="logo"/>
                    </span>
                    <span className="text">Planing</span>
                </a>
                </li>
                <li className="list">
                <a href={"#"}>
                    <span className="icon">
                    <img style={{display: "block", margin: "auto", height: "60px"}} src={logoTeam}
                         className="App-logo-loader" alt="logo"/>
                    </span>
                    <span className="text">Equipe</span>
                </a>
                </li>
                <li className="list">
                <a href={"#"}>
                    <span className="icon">
                    <img style={{display: "block", margin: "auto", height: "60px"}} src={logoTeam}
                         className="App-logo-loader" alt="logo"/>
                    </span>
                    <span className="text">News</span>
                </a>
                </li>
                <li className="list">
                <a href={"#"}>
                    <span className="icon">
                    <img style={{display: "block", margin: "auto", height: "60px"}} src={logoTeam}
                         className="App-logo-loader" alt="logo"/>
                    </span>
                    <span className="text">Contact</span>
                </a>
                </li>
                <div className="bubble"></div>
            </ul>
        </div>
    );
}

export default NavBar;