import React from "react";
import dashboard from "../../Assets/dashboard.svg";

const WelcomePage = () => {
  return (
    <div>
      <div className="flex justify-end my-0 sm:my-5 mx-8">
        <label htmlFor="ruby-drawer" className="drawer-button lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </label>
      </div>
      <section className="px-5">
        <div className="flex flex-col justify-center sm:py-12 lg:py-16 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md lg:text-left">
            <h1 className="text-5xl font-bold sm:text-6xl">Dashboard</h1>
            <p className="mt-6 text-lg">
              Your dashboard is here, {' '}
              <br className="hidden md:inline lg:hidden" />
              Reload the page if you can's see the options.
            </p>
          </div>
          <div>
            <img
              src={dashboard}
              alt=""
              className="object-contain md:h-96 h-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
