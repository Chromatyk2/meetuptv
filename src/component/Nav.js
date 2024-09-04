import React from "react";
import { Planet } from 'react-planet';
import MainButton from "./MainButton";
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
                        display:"block",
                        margin:"auto",
                        marginTop: "70px"
                    }}
                >
                    X
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
                    backgroundColor: '#9257ad',
                }}
            />
            <div
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: '50%',
                    backgroundColor: '#9257ad',
                }}
            />
            <div
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: '50%',
                    backgroundColor: '#9257ad',
                }}
            />
            <div
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: '50%',
                    backgroundColor: '#9257ad',
                }}
            />
            <div
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: '50%',
                    backgroundColor: '#9257ad',
                }}
            />
            <div></div>
            <div></div>
            <div></div>
        </Planet>
    );
}

export default Nav;