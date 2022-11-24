import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryProducts = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <div className="my-16">
      <div className="p-4 mb-10 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
        <h2 className="text-5xl font-semibold leading-none sm:text-4xl">
          <span className="text-red-700">{products[0].category} C</span>ategory
        </h2>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
