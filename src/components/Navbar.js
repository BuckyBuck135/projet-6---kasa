import React from "react";
import "../css/Navbar.css"

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="#"><img src="./images/kasa-logo.png" className="logo"/></a></li>
                <li className="align-right"><a href="#">Accueil</a></li>
                <li><a href="#">À Propos</a></li>
            </ul>
        </nav>
    )
}