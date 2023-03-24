import React from "react";
import "./Home.css"
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import headerImage from "../../assets/images/eric-muhr-P_XxsdVgtpQ-unsplash.jpg"
import {UseGetListings} from "../../assets/utils/Helpers/Services"

export default function Home() {
    const data = UseGetListings("./data/logements.json")
    const isLoading = data.state 
    const cards = data.data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <section>
            <section>
                <Hero 
                image={headerImage}
                title="Chez vous, partout et ailleurs"
                />
            </section>
            <section className="home">
                {/* <Loader /> */}
                {isLoading ? <Loader /> : cards}
            </section>
            
        </section>
    )
}