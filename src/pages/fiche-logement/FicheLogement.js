import React from "react";
import "./FicheLogement.css"
import Tag from "../../components/Tag/Tag"

const data = require("../../data/logements.json");

export default function FicheLogement() {
    const tags = data.map(item => {
        return (
            // WIP => I actually want 1 tag per div, not all tags in one div
            <Tag 
                key={item.id}
                tags={item.tags.join(" ")}
            />
        )
    })



    return (
        <section className="main">
            {tags}
        </section>
    )
}