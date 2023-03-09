import React from "react";
import "./Home.css"
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
        <section className="home">
            {cards}
        </section>
    )
}