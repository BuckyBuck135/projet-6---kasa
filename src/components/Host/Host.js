import React from "react";
import "./Host.css"


export default function Host(props) {
        return <div className="host--wrapper">
                    <h4 className="host--name">{props.host.name}</h4>
                    <img className="host--image" src={props.host.picture} alt="Picture of the host"/>
                </div>
}

