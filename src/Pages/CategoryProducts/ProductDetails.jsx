import React from "react";
import { useLocation } from "react-router-dom";
import badge from "../../Assets/verified-badge.png";

const ProductDetails = () => {
  const { state: product } = useLocation();
  console.log(product);
  const {
    condition,
    description,
    img,
    location,
    mobile_number,
    name,
    original_price,
    postDate,
    resell_price,
    seller_email,
    seller_name,
    seller_verification,
    status,
    year_of_purchase,
    years_of_use,
    _id,
  } = product;
  return (
    <div className="flex justify-center my-20">
      <div className="card bg-base-100 w-96 shadow-xl">
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
          <p>{seller_email}</p>
          <p>Number: {mobile_number}</p>
          <p>Original price: {original_price}</p>
          <p>Resell price: {resell_price}</p>
          <p>Location: {location}</p>
          <p>Condition: {condition}</p>
          <p>Year used: {years_of_use}</p>
          <p>Year of purchase: {year_of_purchase}</p>
          <p>Post Date: {postDate}</p>
          <p>
            Status: <span className="text-green-500">{status}</span>
          </p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
