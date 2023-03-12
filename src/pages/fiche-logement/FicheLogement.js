import React from "react"
import { useParams } from "react-router-dom";
import "./FicheLogement.css"
import Tag from "../../components/Tag/Tag"

const data = require("../../data/logements.json");

export default function FicheLogement() {
    const params = useParams()
    console.log(params)
    // const tags = data.map(item => {
    //     return (
    //         <h1>Logement</h1>
    //     )
    // })



    return (
        <section className="main">
            <h1>Logement {params.id}</h1>
        </section>
    )
}