import React from "react";
import logo from "../../../Assets/ruby.png";

const Footer = () => {
  return (
    <footer className="px-16 py-8 bg-gray-100 text-gray-600">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12">
            <img src={logo} className alt="w-5 h-5" />
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <a rel="noopener noreferrer" href="#0">
                Terms of Use
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#0">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a rel="noopener noreferrer" href="#0">
              Instagram
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#0">
              Facebook
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#0">
              Twitter
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center mt-8 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
      </div>
      <div className="py-6 text-sm text-center text-gray-600">
        © 2023 OldRuby - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
