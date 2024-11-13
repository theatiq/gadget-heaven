import React from "react";
import { Link } from "react-router-dom";

const GadgetCard = ({ gadget }) => {
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    Specification,
    availability,
    rating,
  } = gadget;
  return (
    <div className="card bg-base-200 border rounded-lg ">
      <figure className="px-2 pt-2">
        <img
          src={product_image}
          alt="Gadget"
          className="rounded-xl h-[300px] w-full"
        />
      </figure>
      <div className="card-body items-start text-center">
        <h2 className="card-title text-start">{description}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/gadget/${product_id}`}>
            <button className="btn border-purple-600 rounded-3xl">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GadgetCard;
