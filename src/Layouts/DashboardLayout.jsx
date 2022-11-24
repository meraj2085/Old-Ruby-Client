import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getRole } from "../Api/getRole";
import { AuthContext } from "../Contexts/AuthProvider";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import AuthenticationSpinner from "../Pages/Shared/Spinners/AuthenticationSpinner";

const DashboardLayout = () => {
  const {user, role, setRole} = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getRole(user?.email)
    .then(data => {
      setRole(data)
      setLoading(false)
    })
  }, [user, setRole])

  console.log(role);


  return (
    <>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="ruby-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="ruby-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 bg-red-100 w-80 text-base-content">
            <li>
              <Link to="/dashboard">Home</Link>
            </li>
            <li>
              <Link to="/dashboard/myOrders">My orders</Link>
            </li>
            <li>
              <Link to="/dashboard/allBuyers">All buyers</Link>
            </li>
            <li>
              <Link to="/dashboard/addAProduct">Add a product</Link>
            </li>
            <li>
              <Link to="/dashboard/myProducts">My products</Link>
            </li>
            <li>
              <Link to="/dashboard/allSellers">All Sellers</Link>
            </li>
            <li>
              <Link to="/dashboard/reportedItems">Reported Items</Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DashboardLayout;