import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useProSidebar } from "react-pro-sidebar";

export const Navbar = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <nav className="navbar flex justify-between w-full px-4 transition duration-200 ease-in-out">
      <div className="left flex justify-between items-center gap-5">
        {/* logo and toggle section */}
        <div className="logo--sections flex items-center justify-between w-[210px]">
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

        {/* hide search container on small screen and show on screen > 600px */}
        <div className="search--bar hidden sm:flex items-center p-2 border-2 rounded-lg border-purple-100 gap-2 bg-purple-100 w-[500px]">
          <span className="material-symbols-outlined text-[17px] text-purple-400">
            search
          </span>
          <input
            className="input w-full border-0 p-1 outline-none text-gray-800 text-[13px] font-firaSans h-full bg-purple-100"
            placeholder="search"
          />
        </div>
      </div>
      <div className="right">
        <div className="user--profile flex items-center gap-2">profile</div>
      </div>
    </nav>
  );
};
