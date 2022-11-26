import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/ruby.png";
import { AuthContext } from "../../../Contexts/AuthProvider";
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  
  const handleLogOut = () =>{
    logout()
    .then(result =>{
      toast.success('Logout successful', {duration: 3000});
    }).catch(err =>{
      console.log(err.message);
    })
  }

  return (
    <header className="md:px-16 px-5 py-3 bg-gray-100 text-gray-800 align-middle">
      <div className="container flex justify-between mx-auto">
        <div>
          <Link
            to="#"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img className="md:w-[50px] w-[40px]" src={logo} alt="" />
            <span className="ml-2 text-2xl font-semibold text-gray-800">
              Old <span className="text-red-700">R</span>uby
            </span>
          </Link>
        </div>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link to="/" className="flex items-center px-4 hover:text-red-700">
              Home
            </Link>
          </li>
          <li className="flex">
            <Link to="/dashboard" className="flex items-center px-4 hover:text-red-700">
              Dashboard
            </Link>
          </li>
          <li className="flex">
            <Link to="/" className="flex items-center px-4 hover:text-red-700">
              Link
            </Link>
          </li>
          <li className="flex">
            <Link to="/" className="flex items-center px-4 hover:text-red-700">
              Link
            </Link>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {user?.uid ? (
            <>
              <p onClick={handleLogOut}>
                <button className="self-center px-8 py-3 font-semibold rounded bg-red-700 text-gray-50">
                  Logout
                </button>
              </p>
            </>
          ) : (
            <>
              <Link to="/signIn">
                <button className="self-center px-8 py-3 font-semibold rounded bg-red-700 text-gray-50">
                  Sign in
                </button>
              </Link>
            </>
          )}
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
