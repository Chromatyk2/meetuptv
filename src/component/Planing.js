import React, {useState} from 'react';
import logo from "../logo.svg";
import logoText from '../Typogramme_Rouge.svg';


function Planing() {
    return (
        <>
            <div style={{display:"flex", flexFlow:"row", alignItems:"baseline", minHeight: "65vh"}} className="App-loader">
                <img src={logo} className="App-logo-loader" alt="logo"/>
                <img style={{width:"560px"}} src={logoText} className="App-logo-loader" alt="logo"/>
            </div>
            <p style={{textAlign:"center",color: "#ff6254", textTransform: "uppercase", fontWeight: "bold"}}>En construction on arrive
                bientôt !</p>
        </>
    )
        ;
}

export default Planing;
