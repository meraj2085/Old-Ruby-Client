import React from "react";
import { Link } from "react-router-dom";

const BuyerMenu = () => {
  return (
    <div>
      <li className="rounded-md bg-red-600 hover:bg-red-700 text-white mb-3">
        <Link to="/dashboard/myOrders">My orders</Link>
      </li>
    </div>
  );
};

export default BuyerMenu;
