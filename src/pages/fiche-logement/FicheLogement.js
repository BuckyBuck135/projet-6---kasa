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
    const {title, location, tags, rating, host, description, equipments} = listingById   

    if(error) {
        return <span>There was a problem fetching data...</span>
    }
    if (isLoading) {
        return <Loader />
    } else if (listingById){
        return ( 
            <section className="main">
                
                <Carrousel 
                    listing={listingById}
                />
    
                <div className="listing--content">
                    <div className="listing--content-wrapper">
                        <div className="listing--wrapper-left">
                            <div className="listing--heading">
                                <h1>{title}</h1>
                                <h2>{location}</h2>
                            </div>
                            <Tag 
                                tags={tags}
                            />
                        </div>
    
                        <div className="listing--wrapper-right">
                            <StarRating 
                                rating={rating}
                            />
                            <Host 
                                host={host}
                            />
                        </div>
                    </div>
                    <div className="collapsible-container">
                        <Collapsible 
                            type="paragraph"
                            title="Description"
                            description={description}
                            equipments={null}
                        />
    
                        <Collapsible 
                            type="list"
                            title="Equipements"
                            description={null}
                            equipments={equipments}
                        />
                    </div>
                </div>
            </section>
        )
    } else {
        return <NotFound />
    }
}
