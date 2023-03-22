import React from "react";
import "./Home.css"
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
import headerImage from "../../assets/images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg"

const data = require("../../data/logements.json");

export default function Home() {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <section>
            <section>
                <Hero 
                image={headerImage}
                title="Chez vous, partout et ailleurs"
                />
            </section>
            <section className="home">
                {cards}
            </section>
            
        </section>
    )
}