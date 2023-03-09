import React from "react";
import "../css/Main.css"
import Card from "./Card";

const data = require("../data/logements.json");

export default function HomeMain(props) {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <section className="main">
            {cards}
        </section>
    )
}