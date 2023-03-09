import React from "react";
import "./NotFound.css"

//need to insert a route to home page

export default function NotFound() {
    return (
        <section className="not-found">
            <h1 className="not-found--title">
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </h1>
            <h2 className="not-found--subtitle">Oups ! La page que vous demandez n'existe pas.</h2>
            <p className="not-found--paragraph"><a href="#">Retourner sur la page d’accueil</a></p>
        </section>
    )
}