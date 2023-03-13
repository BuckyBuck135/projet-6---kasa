import React from "react";
import { Link } from "react-router-dom"
import logo from "../../images/kasa-logo-pink.png";

import "./Navbar.css"

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/"><img src={logo} className="logo" alt="Kasa logo." /></Link></li>
                <li className="align-right"><Link to="/">Accueil</Link></li>
                <li><Link to="/a-propos">À Propos</Link></li>
            </ul>
        </nav>
    )
}