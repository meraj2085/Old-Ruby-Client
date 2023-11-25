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
    _id,
  } = product;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="h-[150px]">
        <img src={img} alt="Product" />
      </figure>
      <div className="card-body gap-0">
        <h2 className="card-title">{name}</h2>
        <div className="flex">
          <div className="text-sm">{seller_name}</div>
          {seller_verification === true && (
            <div>
              <img src={badge} className="w-3 mt-[5px] mx-1" alt="" />
            </div>
          )}
        </div>
        <p className="mt-5">
          {description.length > 50
            ? `${description.slice(0, 50)}...`
            : description}
        </p>
        <p className="flex gap-2 mt-3">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-map-pin"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
          </span>{" "}
          {location}
        </p>
        <p className="flex gap-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-currency-dollar"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
              <path d="M12 3v3m0 12v3" />
            </svg>
          </span>
          ${resell_price}
        </p>
        <div className="button_part flex justify-end">
          <Link to={`/product/${_id}`}>
            <p className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#b23a48]">
              See details
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseCard;
