import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getRole } from "../Api/getRole";
import { AuthContext } from "../Contexts/AuthProvider";
import AdminMenu from "../Pages/Menu/AdminMenu";
import BuyerMenu from "../Pages/Menu/BuyerMenu";
import SellerMenu from "../Pages/Menu/SellerMenu";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getRole(user?.email).then((data) => {
      setRole(data);
      setLoading(false);
    });
  }, [user, setRole]);

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
          <ul className="menu p-4 w-52 md:w-80 bg-base-100 md:bg-transparent text-base-content">
            <li className="rounded-md bg-slate-200 hover:bg-slate-100 mb-3">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            {loading ? (
              <>
                <li className="rounded-md bg-slate-200 hover:bg-slate-100 mb-3">
                  <p>Loading...</p>
                </li>
              </>
            ) : (
              <>
                {role === "Buyer" && <BuyerMenu></BuyerMenu>}
                {role === "Seller" && <SellerMenu></SellerMenu>}
                {role === "Admin" && <AdminMenu></AdminMenu>}
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DashboardLayout;
