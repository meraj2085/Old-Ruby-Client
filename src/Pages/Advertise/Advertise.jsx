import React from "react";
import AdvertiseCard from "./AdvertiseCard";

const Advertise = ({ advertisedProduct }) => {
  return (
    <div id="" className="my-10 max-w-[1200px] mx-auto">
      <div className="p-4 mb-10 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
        <h2 className="text-5xl font-semibold leading-none sm:text-4xl">
          <span className="text-red-700">A</span>dvertised
        </h2>
        <p className="px-8 my-2">
          Best products for you are here.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-5 md:mx-0">
        {advertisedProduct.map((product) => (
          <AdvertiseCard key={product._id} product={product}></AdvertiseCard>
        ))}
      </div>
    </div>
  );
};

export default Advertise;
