import React from "react";
import "../css/Main.css"
import Card from "./Card";

const data = require("../logements.json");

export default function Main(props) {
    const cards = data.map(item => {
        return (
            <Card 
            //still getting a warning in spite of setting the key to the item's unique ID
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