import React from "react";
import { Link } from "react-router-dom";

const BuyerMenu = () => {
  return (
    <div>
      <li className="rounded-md bg-slate-200 hover:bg-slate-100 mb-3">
        <Link to="/dashboard/myOrders">My orders</Link>
      </li>
    </div>
  );
};

export default BuyerMenu;
