import React from "react";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div>
      <li>
        <Link to="/dashboard/allSellers">All Sellers</Link>
      </li>
      <li>
        <Link to="/dashboard/allBuyers">All buyers</Link>
      </li>
      <li>
        <Link to="/dashboard/reportedItems">Reported Items</Link>
      </li>
    </div>
  );
};

export default AdminMenu;
