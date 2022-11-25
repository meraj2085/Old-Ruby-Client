import React from "react";
import { Link } from "react-router-dom";

const BuyerMenu = () => {
  return (
    <div>
      <li>
        <Link to="/dashboard/myOrders">My orders</Link>
      </li>
    </div>
  );
};

export default BuyerMenu;
