import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/ruby.png";
import { AuthContext } from "../../../Contexts/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logout()
      .then((result) => {
        toast.success("Logout successful", { duration: 3000 });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <header className="md:px-16 px-5 py-3 bg-gray-100 text-gray-800 align-middle">
      <div className="container relative flex justify-between mx-auto">
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
            <Link
              to="/dashboard"
              className="flex items-center px-4 hover:text-red-700"
            >
              Dashboard
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/blog"
              className="flex items-center px-4 hover:text-red-700"
            >
              Blog
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
        <button onClick={() => setIsMenuOpen(true)} className="p-4 lg:hidden">
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
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full z-10 sm:hidden block">
            <div className="p-5 bg-white border rounded shadow-sm">
              <div className="flex items-center justify-between mb-4">
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
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul className="space-y-4">
                  <li className="flex">
                    <Link
                      to="/"
                      className="flex items-center px-4 hover:text-red-700"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      to="/dashboard"
                      className="flex items-center px-4 hover:text-red-700"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      to="/blog"
                      className="flex items-center px-4 hover:text-red-700"
                    >
                      Blog
                    </Link>
                  </li>
                  <div>
                  {user?.uid ? (
                    <>
                      <li onClick={handleLogOut}>
                        <button className="flex items-center px-4 hover:text-red-700">
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <Link to="/signIn">
                        <button className="flex items-center px-4 hover:text-red-700">
                          Sign in
                        </button>
                      </Link>
                    </>
                  )}
                </div>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
