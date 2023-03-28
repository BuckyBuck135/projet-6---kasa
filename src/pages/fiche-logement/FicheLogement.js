import React from "react"
import {useParams} from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag"
import Collapsible from "../../components/Collapsible/Collapsible"
import StarRating from "../../components/StarRating/StarRating"
import Host from "../../components/Host/Host"
import NotFound from "../not-found/NotFound";
import Loader from "../../components/Loader/Loader"
import { UseGetListingById } from "../../assets/services/Services";
import "./FicheLogement.css"

export default function FicheLogement() {  
    const params = useParams()
    const {listingById, isLoading, error} = UseGetListingById("../../data/logements.json", params)


    if(error) {
        return <span>Problème de connexion au serveur...</span>
    } else if (isLoading) {
        return <Loader />
    } else if (!listingById){
        return <NotFound />
    } else {
        return ( 
            <section className="main">
                
                <Carrousel 
                    listing={listingById}
                />
    
                <div className="listing--content">
                    <div className="listing--content-wrapper">
                        <div className="listing--wrapper-left">
                            <div className="listing--heading">
                                <h1>{listingById.title}</h1>
                                <h2>{listingById.location}</h2>
                            </div>
                            <Tag 
                                tags={listingById.tags}
                            />
                        </div>
    
                        <div className="listing--wrapper-right">
                            <StarRating 
                                rating={listingById.rating}
                            />
                            <Host 
                                host={listingById.host}
                            />
                        </div>
                    </div>
                    <div className="collapsible-container">
                        <Collapsible 
                            type="paragraph"
                            title="Description"
                            description={listingById.description}
                            equipments={null}
                        />
    
                        <Collapsible 
                            type="list"
                            title="Equipements"
                            description={null}
                            equipments={listingById.equipments}
                        />
                    </div>
                </div>
            </section>
        )
    }
}
