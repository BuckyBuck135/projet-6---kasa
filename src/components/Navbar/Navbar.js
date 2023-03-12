import React from "react";
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/"><img src="./images/kasa-logo-pink.png" className="logo" alt="Kasa logo." /></Link></li>
                <li className="align-right"><Link to="/">Accueil</Link></li>
                <li><Link to="/a-propos">À Propos</Link></li>
            </ul>
        </nav>
    )
}