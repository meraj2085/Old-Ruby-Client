import React from "react";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div>
      <li className="rounded-md bg-red-600 hover:bg-red-700 text-white mb-3">
        <Link to="/dashboard/allSellers">All Sellers</Link>
      </li>
      <li className="rounded-md bg-red-600 hover:bg-red-700 text-white mb-3">
        <Link to="/dashboard/allBuyers">All buyers</Link>
      </li>
      <li className="rounded-md bg-red-600 hover:bg-red-700 text-white mb-3">
        <Link to="/dashboard/reportedItems">Reported Items</Link>
      </li>
    </div>
  );
};

export default AdminMenu;
