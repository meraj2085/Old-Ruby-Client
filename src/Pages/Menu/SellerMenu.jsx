import React from "react";
import { Link } from "react-router-dom";

const SellerMenu = () => {
  return (
    <div>
      <li className="rounded-md bg-slate-200 hover:bg-slate-100 mb-3">
        <Link to="/dashboard/addAProduct">Add a product</Link>
      </li>
      <li className="rounded-md bg-slate-200 hover:bg-slate-100 mb-3">
        <Link to="/dashboard/myProducts">My products</Link>
      </li>
    </div>
  );
};

export default SellerMenu;
