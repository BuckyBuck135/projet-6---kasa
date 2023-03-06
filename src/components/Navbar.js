import React from "react";
import "../Navbar.css"

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="#"><img src="./images/kasa-logo.png" className="logo"/></a></li>
                <li className="align-right"><a href="#">Accueil</a></li>
                <li><a href="#">A Propos</a></li>
            </ul>
        </nav>
    )
}