import React from "react";
import "../css/Card.css"

export default function Card(props) {
    console.log(props)
    return (
        <article className="card" style={{backgroundImage: `url(${props.item.cover})`}}>
            <h2 className="card--title">{props.item.title}</h2>
        </article>
    )
}