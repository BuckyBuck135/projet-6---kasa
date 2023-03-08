import React from "react";
import "../css/Card.css"

export default function Card(props) {
    return (
        <article className="card">
            <img className="card--image" src={`${props.item.cover}`} alt={props.item.title}/>
            <h2 className="card--title">{props.item.title}</h2>
        </article>
    )
}