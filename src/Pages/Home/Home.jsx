import React from 'react';
import sellingImg from '../../Assets/home-img.svg'

const Home = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto min-h-screen sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="mb-6">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                Sell Your old items
                <br className="hidden md:block" />
                or buy from here{" "}
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
                I am a professional home chef. Committed to provide best meal
                for you in minimal time. I have been cooking for 15 years &
                worked with several renowned restaurants. Now i myself will cook
                personally for you and provide you your personal dish.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <div className="lg:w-[750px] w-[300px]">
              <img className="object-cover" src={sellingImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;