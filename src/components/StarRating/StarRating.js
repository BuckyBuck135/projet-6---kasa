import React from "react";
import pinkStar from "../../images/pink-star.png"
import greyStar from "../../images/grey-star.png"
import "./StarRating.css"

export default function StarRating() {
    return (
      <div className="star-rating">
        <img src={pinkStar} className="star" alt="star icon." />
        <img src={pinkStar} className="star" alt="star icon." />
        <img src={pinkStar} className="star" alt="star icon." />
        <img src={pinkStar} className="star" alt="star icon." />
        <img src={greyStar} className="star" alt="star icon." />
      </div>
    );
  };