import React from "react";
import { Link } from "react-router-dom";

const SellerMenu = () => {
  return (
    <div>
      <li>
        <Link to="/dashboard/addAProduct">Add a product</Link>
      </li>
      <li>
        <Link to="/dashboard/myProducts">My products</Link>
      </li>
    </div>
  );
};

export default SellerMenu;
