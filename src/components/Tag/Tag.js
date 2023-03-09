import React from "react";
import "./Tag.css"

// implement dropdown arrow function

// props are passed on from MainLogement
export default function Tag(props) {
    return (
        <article className="tag">
            <h3 className="tag--title">{props.tags}</h3>
        </article>
    )
}