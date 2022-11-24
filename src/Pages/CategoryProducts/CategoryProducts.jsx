import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../Cards/ProductCard";
import BookingModal from "../Shared/BookingModal/BookingModal";

const CategoryProducts = () => {
  const products = useLoaderData();
  const [product, setProduct] = useState(null)

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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-16">
        {products?.map((product) => (
          <ProductCard product={product} setProduct={setProduct} key={product._id}></ProductCard>
        ))}
      </div>
      <BookingModal product={product} setProduct={setProduct}></BookingModal>
    </div>
  );
};

export default CategoryProducts;
