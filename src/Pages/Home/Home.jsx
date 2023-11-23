import React, { useEffect, useState } from "react";
import sellingImg from "../../Assets/home-img.svg";
import Advertise from "../Advertise/Advertise";
import Catagories from "../Catagories/Catagories";
import axios from "axios";
import Reviews from "../Reviews/Reviews";
import { Link } from "react-router-dom";

const Home = () => {
  const [advertisedProduct, setAdvertisedProduct] = useState(null);
  useEffect(() => {
    axios
      .get("https://oldruby-server.vercel.app/advertised")
      .then((res) => {
        setAdvertisedProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <section className="mt-10">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leadi sm:text-6xl">
              <span>Buy</span>
              <span> what you desire</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Sell your old mobile phone or you can buy form here. Choose your
              product and deal directly with the seller
            </p>
            <div className="flex flex-col  space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                to="products"
                className="px-8 py-3 text-lg font-semibold rounded bg-[#b23a48] text-white"
              >
                Products
              </Link>
              <a
                rel="noopener noreferrer"
                href="#Category"
                className="px-8 py-3 text-lg font-semibold border rounded "
              >
                Categories
              </a>
            </div>
          </div>
          <div className="md:flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 hidden">
            <img
              src={sellingImg}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
      <Catagories></Catagories>
      {advertisedProduct?.length > 0 && (
        <Advertise advertisedProduct={advertisedProduct}></Advertise>
      )}
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
