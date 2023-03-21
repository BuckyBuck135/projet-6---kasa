import React from "react"
import "./Carrousel.css"
import nextArrow from "../../images/next-arrow.svg"
import previousArrow from "../../images/previous-arrow.svg"

export default function Carrousel(props) {
    const maxIndex = props.listing.pictures.length - 1
    const [index, setIndex] = React.useState(0)

    const currentImage = props.listing.pictures[index]
    

    function prevImage() {
        setIndex(prevIndex => prevIndex === 0 ? prevIndex = maxIndex : prevIndex = prevIndex - 1)
    }

    function nextImage() {
        setIndex(prevIndex => prevIndex === maxIndex ? prevIndex = 0 : prevIndex = prevIndex + 1)
    }

    return (
        <figure className="carrousel--container">
            <img src={previousArrow} onClick={prevImage} className="carrousel--arrow previous" alt="Icône de défilement en avant du carrousel."/> 
            <img src={currentImage} className="carrousel--image animate" alt="Carrousel d'images du logement." />
            <img src={nextArrow} onClick={nextImage} className="carrousel--arrow next" alt="Icône de défilement en arrière du carrousel."/> 
            <figcaption className="carrousel--caption">{index+1}/{maxIndex+1}</figcaption>
        </figure>
    )
}