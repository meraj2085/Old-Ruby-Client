import React from "react";
import { Link } from "react-router-dom";
import badge from "../../Assets/verified-badge.png";

const AdvertiseCard = ({ product }) => {
  const {
    name,
    img,
    seller_name,
    resell_price,
    seller_verification,
    description,
    location,
    _id
  } = product;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <div className="flex">
          <div className="text-lg">Seller: {seller_name}</div>
          {seller_verification === true && (
            <div>
              <img src={badge} className="w-6 mx-3" alt="" />
            </div>
          )}
        </div>
        <p>Location: {location}</p>
        <p>Price: ${resell_price}</p>
        <p>{description}</p>
        <div className="card-actions justify-center mt-4">
          <Link to={`/product/${_id}`}>
            <button
              type="button"
              className="px-5 py-2 font-semibold border rounded border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-gray-100"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseCard;
