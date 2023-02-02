import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col lg:flex-row md:gap-26 gap-14">
        <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div class="relative">
            <div class="absolute">
              <div class="">
                <div class="text-[50px] font-dark font-bold">
                  <h1 class="text-[50px] font-dark font-bold">404</h1>
                </div>
                <p class="my-2 text-gray-800">
                  Sorry about that! Please visit our homepage to get where you
                  need to go.
                </p>
                <button class=" lg:w-auto my-2 border sm:text-center rounded md py-4 px-8 text-center bg-indigo-500 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                   <Link to="/">Back To Homepage</Link>
                </button>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
