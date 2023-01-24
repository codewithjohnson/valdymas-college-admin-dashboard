import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useProSidebar } from "react-pro-sidebar";
import { getCurrentimeOfDay } from "../../utilities/currentDate";

export const Navbar = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <nav className="navbar flex justify-between w-full px-4 transition duration-200 ease-in-out">
      <div className="left flex justify-between items-center gap-5">
        {/* logo and toggle section */}
        <div className="w-fit flex items-center justify-between sm:w-[210px] bg-transparent">
          <Link
            to="/"
            className="hidden sm:flex gap-2 justify-between items-center select-none"
          >
            <img src={logo} alt="" style={{ width: "30px", height: "30px" }} />
            <p className="text-xl font-semibold font-firaSans text-gray-700">
              VCAPS
            </p>
          </Link>

          {/* toggle button */}
          <div className="toggle--icon">
            <span
              onClick={() => collapseSidebar()}
              className="material-symbols-outlined bg-purple-200 text-md text-purple-500 cursor-pointer hover:bg-purple-700 hover:text-purple-300 p-1 rounded-md select-none"
            >
              menu
            </span>
          </div>
        </div>
      </div>

      <div className="right flex flex-row justify-between items-center  flex-1">
        <p className="text-slate-700  font-poppins text-xl font-semibold capitalize ml-4 select-none sm:ml-8">
          good {getCurrentimeOfDay()},{" "}
          <span className="text-red-900">Debby</span> 🖐🏼
        </p>
        <p className="hidden sm:block user--profile gap-2 text-red-800 bg-red-50 p-3 font-poppins rounded-lg text-sm select-none">
          muyiwamighty@gmail.com
        </p>
      </div>
    </nav>
  );
};
