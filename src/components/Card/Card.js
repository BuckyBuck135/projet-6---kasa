import React from "react";
import "./Card.css"

export default function Card(props) {
    return (
        <article id={props.item.id} className="card">
            <img className="card--image" src={`${props.item.cover}`} alt={props.item.title}/>
            <h2 className="card--title">{props.item.title}</h2>
        </article>
    )
}