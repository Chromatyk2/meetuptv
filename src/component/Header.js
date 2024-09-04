import logotype from "../Typogramme_Rouge.png";
import React from "react";

function Header() {
    return (
        <div className={"header"}>
            <img src={logotype} className="App-logo-loader" alt="logo"/>
        </div>
    );
}

export default Header;