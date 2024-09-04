import React from "react";
import { Planet } from 'react-planet';
import MainButton from "./MainButton";
import logo from "../social-networks.png";
import logoTwitch from "../twitch.png";
import logoYoutube from "../youtube.png";
import logoInsta from "../instagram.png";
import logoFacebook from "../facebook.png";
import logoTiktok from "../tic-tac.png";
function Nav() {
    return (
        <Planet
            centerContent={
                <div
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: '50%',
                        backgroundColor: '#ff6254',
                        display: "flex",
                        margin: "auto",
                        marginTop: "70px"
                    }}
                    className={"mainPlanet"}
                >
                    <img style={{display: "block", margin: "auto", height: "60px"}} src={logo}
                         className="App-logo-loader" alt="logo"/>
                </div>
            }
            open
            autoClose
            orbitRadius={130}
            rotation={70}
            hideOrbit={true}
        >
            <div
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: '50%',
                    backgroundColor: '#802030',
                    display:"flex"
                }}
            >
                <img style={{display: "block", margin: "auto", height: "50px"}} src={logoTwitch} className="App-logo-loader" alt="logo"/>
            </div>
            <div
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: '50%',
                    backgroundColor: '#802030',
                    display:"flex"
                }}
            >
                <img style={{display: "block", margin: "auto", height: "50px"}} src={logoYoutube} className="App-logo-loader" alt="logo"/>
            </div>
            <div
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: '50%',
                    backgroundColor: '#802030',
                    display:"flex"
                }}
            >
                <img style={{display: "block", margin: "auto", height: "50px"}} src={logoInsta} className="App-logo-loader" alt="logo"/>
            </div>
            <div
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: '50%',
                    backgroundColor: '#802030',
                    display:"flex"
                }}
            >
                <img style={{display: "block", margin: "auto", height: "50px"}} src={logoTiktok} className="App-logo-loader" alt="logo"/>
            </div>
            <div
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: '50%',
                    backgroundColor: '#802030',
                    display:"flex"
                }}
            >
                <img style={{display: "block", margin: "auto", height: "50px"}} src={logoFacebook} className="App-logo-loader" alt="logo"/>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </Planet>
    );
}

export default Nav;