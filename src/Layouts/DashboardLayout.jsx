import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getRole } from "../Api/getRole";
import { AuthContext } from "../Contexts/AuthProvider";
import AdminMenu from "../Pages/Menu/AdminMenu";
import BuyerMenu from "../Pages/Menu/BuyerMenu";
import SellerMenu from "../Pages/Menu/SellerMenu";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import AuthenticationSpinner from "../Pages/Shared/Spinners/AuthenticationSpinner";

const DashboardLayout = () => {
  const { user, role, setRole } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getRole(user?.email).then((data) => {
      setRole(data);
      setLoading(false);
    });
  }, [user, setRole]);

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
            {role === "Buyer" && <BuyerMenu></BuyerMenu>}
            {role === "Seller" && <SellerMenu></SellerMenu>}
            {role === "Admin" && <AdminMenu></AdminMenu>}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DashboardLayout;
