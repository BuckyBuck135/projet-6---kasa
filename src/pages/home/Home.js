import React from "react";
import "./Home.css"
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";

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
                image="images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg"
                title="Chez vous, partout et ailleurs"
                />
            </section>
            <section className="home">
                {cards}
            </section>
            
        </section>
    )
}