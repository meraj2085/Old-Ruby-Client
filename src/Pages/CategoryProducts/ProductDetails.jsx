import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import badge from "../../Assets/verified-badge.png";
import BookingModal from "../Shared/BookingModal/BookingModal";

const ProductDetails = () => {
  const { state: product } = useLocation();
  const [selectedProduct, setSelectedProduct] = useState(null);
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
    <div>
      <div className="flex justify-center my-20">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title">{name}</h2>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </div>
            </div>
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
            <div className="card-actions justify-center mt-3">
              <label
                onClick={() => setSelectedProduct(product)}
                htmlFor="ruby-booking-modal"
                className="px-5 py-2 font-semibold border rounded border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-gray-100"
              >
                Book Now
              </label>
            </div>
          </div>
        </div>
      </div>
      {selectedProduct && (
        <BookingModal
          product={product}
          setProduct={selectedProduct}
        ></BookingModal>
      )}
    </div>
  );
};

export default ProductDetails;
