import React from "react";
import { Planet } from 'react-planet';
import MainButton from "./MainButton";
function Nav() {
    return (
        <Planet
            centerContent={<MainButton />}
            hideOrbit
            autoClose
            orbitRadius={60}
            bounceOnClose
            rotation={105}
            // the bounce direction is minimal visible
            // but on close it seems the button wobbling a bit to the bottom
            bounceDirection="BOTTOM"
        >
            <div />
            <div />
            <div />
            <div />
        </Planet>
    );
}

export default Nav;