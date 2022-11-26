import React from "react";
import { Link } from "react-router-dom";
import error from "../../../Assets/errorPage.svg";

const ErrorPage = () => {
  return (
    <section className="flex items-center full sm:p-16 text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 text-center sm:max-w-md">
        <img src={error} className="" alt="" />
        <Link to="/">
          <button className="px-8 py-3 font-semibold rounded-full bg-red-400 text-white">
            Go to home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
