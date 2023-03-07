import React from "react";
import "../css/Dropdown.css"

// implement dropdown arrow function

export default function Dropdown(props) {
    return (
        <article className="dropdown">
            <div className="dropdown--title-container">
                <h3 className="dropdown--title">{props.title}</h3>
                <img src="images/down-arrow.png" id="dropdown--down-arrow" className="dropdown--icon" alt="icône flèche vers le bas."/>
            </div>
            <div className="dropdown--text-container">
                <p className="dropdown--text">{props.text}</p>
            </div>
        </article>
    )
}