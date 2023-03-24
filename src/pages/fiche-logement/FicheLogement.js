import React from "react"
import {useParams} from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag"
import Collapsible from "../../components/Collapsible/Collapsible"
import StarRating from "../../components/StarRating/StarRating"
import Host from "../../components/Host/Host"
import NotFound from "../not-found/NotFound";
import Loader from "../../components/Loader/Loader"
import { UseGetListings } from "../../assets/utils/Helpers/Services";
import "./FicheLogement.css"

export default function FicheLogement() {
    const data = UseGetListings("../../data/logements.json")
    const params = useParams()
    const listing = data.data.find(item => item.id === params.id)
    const isLoading = data.state   

    if (isLoading) {
        return <Loader />
    } else if (listing){
        return ( 
            <section className="main">
                
                <Carrousel 
                    listing={listing}
                />
    
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
                            <StarRating 
                                rating={listing.rating}
                            />
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
    } else {
        return <NotFound />
    }
}
