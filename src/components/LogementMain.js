import React from "react";
import "../css/LogementMain.css"
import Tag from "./Tag"

const data = require("../data/logements.json");

export default function LogementMain() {
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