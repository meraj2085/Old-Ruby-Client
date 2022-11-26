import React from "react";
import { Link } from "react-router-dom";

const SellerMenu = () => {
  return (
    <div>
      <li className="rounded-md bg-red-600 hover:bg-red-700 text-white mb-3">
        <Link to="/dashboard/addAProduct">Add a product</Link>
      </li>
      <li className="rounded-md bg-red-600 hover:bg-red-700 text-white mb-3">
        <Link to="/dashboard/myProducts">My products</Link>
      </li>
    </div>
  );
};

export default SellerMenu;
