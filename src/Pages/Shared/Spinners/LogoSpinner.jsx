import React from "react";
import ruby from "../../../Assets/ruby-remove.png";
const LogoSpinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-12 h-12 animate-spin my-5">
        <img src={ruby} alt="" />
      </div>
    </div>
  );
};

export default LogoSpinner;
