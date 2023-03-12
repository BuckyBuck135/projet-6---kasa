import React from "react";
import {Link} from "react-router-dom"
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <Link to="/"><img src="./images/kasa-logo-white.png" className="footer--logo" alt="Kasa logo." /></Link>
            <p className="footer--text">© 2023 Kasa. All rights reserved</p>
        </footer>
    )
}