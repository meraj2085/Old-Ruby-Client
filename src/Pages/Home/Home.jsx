import React, { useEffect, useState } from "react";
import sellingImg from "../../Assets/home-img.svg";
import Advertise from "../Advertise/Advertise";
import Catagories from "../Catagories/Catagories";
import axios from "axios";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  const [advertisedProduct, setAdvertisedProduct] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:5000/advertised")
      .then((res) => {
        setAdvertisedProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center max-w-2xl px-4 pt-7 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-20 md:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-5">
          <h2 className="max-w-xl text-center mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative text-4xl font-bold sm:text-6xl">Buy</span>
            </span>{" "}
            <span className="text-4xl font-bold sm:text-6xl">what your desire</span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg text-center">
          Here you can sell your unused mobile phone or you can buy form here.
          Choose your favourite product and deal directly with the seller
        </p>
        </div>
        <img src={sellingImg} className="w-full mx-auto md:w-auto" alt="" />
      </div>
      <Catagories></Catagories>
      {advertisedProduct?.length > 0 && (
        <Advertise advertisedProduct={advertisedProduct}></Advertise>
      )}
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
