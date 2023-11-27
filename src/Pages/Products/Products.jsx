import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "./ProductsCard";
import ProductCardLoading from "../Shared/LoadingComponents/ProductCardLoading";

const Products = () => {
  const [advertisedProduct, setAdvertisedProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://oldruby-server.vercel.app/all_products")
      .then((res) => {
        setAdvertisedProduct(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return (
      <div className="my-20 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((product, index) => (
            <ProductCardLoading key={index}></ProductCardLoading>
          ))}
        </div>
      </div>
    );
  }

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
