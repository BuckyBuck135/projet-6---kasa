import React from "react"
import { useParams } from "react-router-dom";
import "./FicheLogement.css"
import Tag from "../../components/Tag/Tag"
import Collapsible from "../../components/Collapsible/Collapsible"
import StarRating from "../../components/StarRating/StarRating"
import Host from "../../components/Host/Host"



const data = require("../../data/logements.json");

export default function FicheLogement() {
    const params = useParams()
    const listing = data.find(item => item.id === params.id)

    return (
        <section className="main">
            
            <div className="listing--image-container">
                <img src={listing.cover} className="listing--image" alt="Diaporama du logement" />
            </div>

            <div className="listing--content">
                <div className="listing--content-wrapper">
                    <div className="listing--wrapper-left">
                        <div className="listing--heading">
                            <h1>{listing.title}</h1>
                            <h2>{listing.location}</h2>
                        </div>
                        <Tag 
                            tags={listing.tags}
                        />
                    </div>

                    <div className="listing--wrapper-right">
                        <StarRating />
                        <Host 
                            host={listing.host}
                        />
                    </div>
                </div>
                <div className="collapsible-container">
                    <Collapsible 
                        type="paragraph"
                        title="Description"
                        description={listing.description}
                        equipments={null}
                    />

                    <Collapsible 
                        type="list"
                        title="Equipements"
                        description={null}
                        equipments={listing.equipments}
                    />
                </div>
            </div>
        </section>
    )
}