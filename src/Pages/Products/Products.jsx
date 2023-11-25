import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [advertisedProduct, setAdvertisedProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://oldruby-server.vercel.app/all_products")
      .then((res) => {
        setAdvertisedProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="my-20 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {advertisedProduct?.map((product) => (
          <ProductsCard key={product._id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
