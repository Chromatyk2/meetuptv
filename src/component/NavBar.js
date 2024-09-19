import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import logo from '../logo.svg';

function NavBar(props) {
    const pseudo = props.cookies.user.data[0].login;
    const [expanded, setExpanded] = useState(false);
    return (

        <Navbar expanded={expanded} bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand><a href={"https://twitch.tv/chromatyk"}><img src={logo} alt="logo"/></a></Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="navbarScroll"
                    onClick={() => setExpanded(!expanded)}
                />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <Link onClick={() => setExpanded(false)} className="navLink linkFromNav" to="/">Accueil</Link>
                        <Link onClick={() => setExpanded(false)} className="navLink linkFromNav" to="/profil">Profil</Link>
                        <Link onClick={() => setExpanded(false)} className="navLink linkFromNav" to="/pokedex">Pokedex</Link>
                        <Link onClick={() => setExpanded(false)} className="navLink linkFromNav" to="/allProfils">Classement</Link>
                        <Link onClick={() => setExpanded(false)} className="navLink linkFromNav" to="/pedandex">Pedandex</Link>
                        {pseudo == "chromatyk" &&
                            <>
                                <Link onClick={() => setExpanded(false)} className="navLink linkFromNav" to="/tcg/cartes">Mes cartes</Link>
                                <Link onClick={() => setExpanded(false)} className="navLink linkFromNav" to="/tcg/boosters">Mes boosters</Link>
                                <Link onClick={() => setExpanded(false)} className="navLink linkFromNav" to="/tcg/boutique">Boutique TCG</Link>
                                <Link onClick={() => setExpanded(false)} className="navLink linkFromNav" to="/49Vs5sWVS2e7qs">Générateur</Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
