import React from "react";

const ProductCardLoading = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="h-[150px]">
        <div className="animate-pulse bg-gray-100 rounded-lg shadow-sm h-[145px]"></div>
      </figure>
      <div className="card-body gap-0">
        <h2 className="card-title">
          <div className="animate-pulse bg-gray-100 rounded-lg shadow-sm h-[20px] w-1/2"></div>
        </h2>
        <div className="flex">
          <div className="text-sm">
            <div className="animate-pulse bg-gray-100 rounded-lg shadow-sm h-[20px] w-1/2"></div>
          </div>
        </div>
        <p className="mt-3">
          <div className="animate-pulse bg-gray-100 rounded-lg shadow-sm h-[20px] w-1/2"></div>
        </p>
        <p className="flex gap-2 mt-3">
          <div className="animate-pulse bg-gray-100 rounded-lg shadow-sm h-[20px] w-1/2"></div>
        </p>
        <p className="flex mt-3">
          <div className="animate-pulse bg-gray-100 rounded-lg shadow-sm h-[20px] w-1/2"></div>
        </p>
        <div className="button_part flex justify-end">
          <div className="animate-pulse bg-gray-100 rounded-lg shadow-sm h-[20px] w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardLoading;
