import React from "react"
import { useParams } from "react-router-dom";
import "./FicheLogement.css"
import Tag from "../../components/Tag/Tag"
import Collapsible from "../../components/Collapsible/Collapsible"
import Host from "../../components/Host/Host"



const data = require("../../data/logements.json");

export default function FicheLogement() {
    const params = useParams()
    const listing = data.find(item => item.id === params.id)
    console.log(listing)

    return (
        <section className="main">
            
            <div className="listing--image-container">
                <img src={listing.cover} className="listing--image"/>
            </div>

            <div className="listing--content">
                <div className="listing--heading">
                    <h1>{listing.title}</h1>
                    <h2>{listing.location}</h2>
                </div>
                <Tag 
                    tags={listing.tags}
                />

                <div className="flex-container">
                    <Host 
                        host={listing.host}
                    />
                </div>

                <Collapsible 
                    type="list"
                    title="Equipements"
                    equipments={listing.equipments}
                />
            </div>
        </section>
    )
}