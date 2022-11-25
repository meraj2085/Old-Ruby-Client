import React from "react";
import { useNavigate } from "react-router-dom";
import badge from "../../Assets/verified-badge.png";

const ProductCard = ({ product, setProduct, reportedItem, setReportedItem }) => {
  const {
    name,
    img,
    seller_name,
    resell_price,
    seller_verification,
    description,
    location,
  } = product;
  const navigate = useNavigate();

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{name}</h2>
          <div>
            <label onClick={()=>setReportedItem(product?._id)} htmlFor="ruby-reportModal">
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
            </label>
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
        <p>Location: {location}</p>
        <p>Price: ${resell_price}</p>
        <p>{description}</p>
        <div className="card-actions justify-between mt-4">
          <label
            onClick={() => setProduct(product)}
            htmlFor="ruby-booking-modal"
            className="px-5 py-2 font-semibold border rounded border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-gray-100"
          >
            Book Now
          </label>
          <button
            onClick={() => navigate("/productDetails", { state: product })}
            type="button"
            className="px-5 py-2 font-semibold border rounded border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-gray-100"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
