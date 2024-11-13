import React, { useState } from "react";
import Rating from "react-rating";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // You can customize with your preferred icons

const RatingComponents = ({ rating }) => {
  return (
    <div>
      
      <div>{rating}</div>
      <Rating
        initialRating={rating}
        emptySymbol={<FaRegStar />}
        fullSymbol={<FaStar />}
        fractions={2}
      />
    </div>
  );
};

export default RatingComponents;
