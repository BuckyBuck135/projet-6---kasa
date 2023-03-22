import React from "react"
import "./Carrousel.css"
import nextArrow from "../../assets/images/next-arrow.svg"
import previousArrow from "../../assets/images/previous-arrow.svg"

export default function Carrousel(props) {
    const maxIndex = props.listing.pictures.length - 1
    const [currentIndex, SetCurrentIndex] = React.useState(0)

    // const currentImage = props.listing.pictures[currentIndex]
    const allImages = props.listing.pictures.map((image, index) => {
        return (
            <div key={index} className={currentIndex === index ? "carrousel--slide carrousel--active" : "carrousel--slide"}>
                {index === currentIndex && <img src={image} className="carrousel--image" alt="Carrousel d'images du logement."  />}
            </div>
        )
    })
    
    function prevImage() {
        SetCurrentIndex(prevIndex => prevIndex === 0 ? prevIndex = maxIndex : prevIndex = prevIndex - 1)
    }

    function nextImage() {
        SetCurrentIndex(prevIndex => prevIndex === maxIndex ? prevIndex = 0 : prevIndex = prevIndex + 1)
    }

    return (
        <figure className="carrousel--container">
            {allImages}
            <img src={previousArrow} onClick={prevImage} className="carrousel--arrow previous" alt="Icône de défilement en avant du carrousel."/> 
            
            <img src={nextArrow} onClick={nextImage} className="carrousel--arrow next" alt="Icône de défilement en arrière du carrousel."/> 
            <figcaption className="carrousel--caption">{currentIndex+1}/{maxIndex+1}</figcaption>
        </figure>
    )
}