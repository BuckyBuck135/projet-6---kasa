import React from "react";
import "../css/HomeHero.css"

export default function HomeHero() {
    return (
        <section className="hero">
            <img src="images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg" className="hero--image" alt="Paysage en plan large" />
            <h1 className="hero--title">Chez vous, partout et ailleurs</h1>
        </section>
    )
}