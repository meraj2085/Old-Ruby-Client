import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import badge from "../../Assets/verified-badge.png";
import BookingModal from "../Shared/BookingModal/BookingModal";
import ReportModal from "../Shared/ReportModal/ReportModal";

const ProductDetails = () => {
  const [reportedItem, setReportedItem] = useState(null);
  const product = useLoaderData();
  const [selectedProduct, setProduct] = useState(null);
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
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-center mb-40 mt-28 mx-5">
        <div className="flex gap-10">
          <div>
            <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 min-w-[300px] max-w-[300px]">
              <img
                alt="Product"
                src={img}
                className="rounded-md object-cover"
              />
              <div className="mt-2">
                <dl>
                  <div>
                    <dt className="sr-only">Product Name</dt>
                    <dd className="font-medium">{name}</dd>
                  </div>
                  <time
                    datetime="2022-10-10"
                    class="block text-xs text-gray-500"
                  >
                    {postDate}
                  </time>
                </dl>
              </div>
              <div className="button_part flex justify-end cursor-pointer">
                <label
                  onClick={() => setProduct(product)}
                  htmlFor="ruby-booking-modal"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#b23a48]"
                >
                  Book now
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="flow-root">
            <dl className="divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Name</dt>
                <dd className="text-gray-700 sm:col-span-2">{name}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Condition</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {condition.charAt(0).toUpperCase() + condition.slice(1)}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Original price</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  ${original_price}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Resell price</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  $1{resell_price}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Status</dt>
                <dd className="text-green-500 sm:col-span-2">
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Year used</dt>
                <dd className="text-gray-700 sm:col-span-2">{years_of_use}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Purchase Year</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {year_of_purchase}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Location</dt>
                <dd className="text-gray-700 sm:col-span-2">{location}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Seller</dt>
                <dd className="text-gray-700 sm:col-span-2">{seller_name}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Mobile</dt>
                <dd className="text-gray-700 sm:col-span-2">{mobile_number}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Email</dt>
                <dd className="text-gray-700 sm:col-span-2">{seller_email}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Description</dt>
                <dd className="text-gray-700 sm:col-span-2">{description}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      {selectedProduct && (
        <BookingModal product={product} setProduct={setProduct}></BookingModal>
      )}
      {reportedItem && (
        <ReportModal
          reportedItem={reportedItem}
          setReportedItem={setReportedItem}
        ></ReportModal>
      )}
    </div>
  );
};

export default ProductDetails;
