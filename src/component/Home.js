import React, {useState} from 'react';
import logo from "../logo.svg";
import logoText from '../Typogramme_Rouge.svg';


function Planing() {
    return (
        <div style={{width:"75%",display:"block",margin:"auto"}}>
            <img style={{display:"block", margin:"auto", width:"250px"}} src={logo} alt="logo"/>
            <h1 style={{color: "#ff6254", fontWeight: "bold", textAlign: "center", fontSize: "60px"}}>MeetUp TV, qu’est-ce que c’est ?</h1>
            <p style={{color: "#ff6254", fontWeight:"bold", fontSize:"20px"}}>MeetUp_TV est une association loi 1901 et son activité est essentiellement basée sur le réseau twitch.
            La ville de Faches-Thumesnil nous a fourni gracieusement des locaux pour monter un plateau tv et des salles
            de streaming (dont une salle fond vert) pour diffuser du contenu sur la chaine de l’association, et qui
            seront accessibles aux adhérents pour leurs propres chaine.</p>

            <p style={{color: "#ff6254", fontWeight:"bold", fontSize:"20px"}}>Le fonctionnement de cette tv est très
                simple. Des animateurs viendront tour à tour diffuser du contenu sur
            twitch.tv/meetup_tv sur des créneaux d’une à plusieurs heures selon le planning. Le fonctionnement sera
            identique à celui d’une radio : chacun son programme hebdomadaire et la structure met en place la technique
            selon les idées des animateurs.</p>

                <p style={{color: "#ff6254", fontWeight:"bold", fontSize:"20px"}}>Les animateurs qui se succederont sur
                    la chaine pourront être des personalités du web déjà connus sur twitch
            et youtube, des jeunes de la région désireux de s’éssayer à l’éxercice du direct, des membres d’associations
            locales présentant leurs activités, des membres des clubs de sports …</p>

                    <p style={{color: "#ff6254", fontWeight:"bold", fontSize:"20px"}}>Les émissions peuvent aller du
                        let’s play de jeu vidéo (un classique sur twitch), au talk show sur le sports
            ou la musique …etc, il y aura également de l’esport, du speedrun, de l’humour, du jeu de societé, de la
            composition musicale et tout ce à quoi nous ne pensons pas. Chaque personne intéressée par le local pourra
            venir, proposer un projet, une idée d’émission, et nous mettrons à disposition notre matériel pour mettre en
            place l’émission de la meilleure manière possible. Toutes les émissions seront diffusées en direct depuis le
            local. Nous gérerons également des teams esport.</p>
        </div>
    )
        ;
}

export default Planing;
