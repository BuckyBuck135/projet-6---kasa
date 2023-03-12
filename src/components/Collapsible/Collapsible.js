import React from "react";
import "./Collapsible.css"

// implement collapsible arrow function

export default function Collapsible(props) {
    if(props.type === "paragraph") {
        return (
            <article className="collapsible">
                <div className="collapsible--title-container">
                    <h3 className="collapsible--title">{props.title}</h3>
                    <img src="images/down-arrow.png" id="collapsible--down-arrow" className="collapsible--icon" alt="icône flèche vers le bas."/>
                </div>
                <div className="collapsible--text-container">
                    <p className="collapsible--text">{props.text}</p>
                </div>
            </article>
        )
    }
    
}