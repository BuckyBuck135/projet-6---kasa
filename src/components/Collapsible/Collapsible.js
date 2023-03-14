import React from "react";
import "./Collapsible.css"
import downArrow from "../../images/down-arrow.png"

// implement collapsible arrow function

export default function Collapsible(props) {
    let content 
    if(props.type == "paragraph") {
        content = (<p className="collapsible--description">{props.description}</p>)
    } else if (props.type == "list"){
        const amenities = props.equipments.map((item, index) => <li key={index} className="collapsible--li">{item}</li>)
        content = (<ul>{amenities}</ul>)
    } 
    
    return (
        <article key={props.id} className="collapsible">
            <div className="collapsible--title-container">
                <h3 className="collapsible--title">{props.title}</h3>
                <img src={downArrow} className="collapsible--icon" alt="icône flèche vers le bas."/>
            </div>
            <div className="collapsible--text-container">
                {content}
            </div>
        </article>
    )
    } 
