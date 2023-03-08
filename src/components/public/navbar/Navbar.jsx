import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../services/auth/auth";

// assets
import logo from "../../../assets/images/logo.webp";

// utilities
import { publicMenuItems } from "../../../utilities/public/menu";

// hooks
import { useIsAuthorized } from "../../../hooks/useAuth";
import { useIsAdmin } from "../../../hooks/useAdmin";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const menuLinks = publicMenuItems;

  // get auth params
  const { HandleSignOut } = useAuth();

  // check if user is admin
  const { isAdmin } = useIsAdmin();

  // check if user is authorized
  useIsAuthorized();

  // close menu when clicked outside
  useEffect(() => {
    const hideMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", hideMenu);
    return () => window.removeEventListener("click", hideMenu);
  }, [isOpen]);

  // close menu when resized to mobile
  useEffect(() => {
    const navBarLimit = window.matchMedia("(min-width: 600px)");
    navBarLimit.addEventListener("change", (e) => {
      if (e.matches) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    });
  }, [isOpen]);

  // handle menu items
  const HandleOnclick = (link) => {
    if (link.name === "logout") {
      HandleSignOut();
    }
  };

  return (
    <nav
      ref={menuRef}
      className="relative w-full bg-gradient-to-r from-slate-900 to-slate-700 z-20"
    >
      <div className=" sm:py-6 sm:px-10 px-5 py-5 flex flex-row justify-between items-center">
        <div className="logo flex flex-row  items-center gap-3 select-none text-gray-100">
          <img src={logo} alt="" className="h-9 w-9 sm:h-12 sm:w-12" />
          <p className="font-semibold text-lg text-orange-400 sm:text-2xl">
            VCAPS
          </p>
        </div>

        {/* right */}
        <span className={`sm:hidden ${isOpen ? "" : ""}`}>
          <span
            onClick={() => setIsOpen(!isOpen)}
            className={`material-symbols-outlined ${
              isOpen ? "hidden" : "block"
            } text-gray-200  cursor-pointer select-none`}
          >
            menu
          </span>
          <span
            onClick={() => setIsOpen(!isOpen)}
            className={`material-symbols-outlined text-white border   border-slate-600 p-1 cursor-pointer select-none ${
              isOpen ? "block" : "hidden"
            } hover:text-slate-300 rounded`}
          >
            close
          </span>
        </span>

        {/* menu items */}
        <ul
          className={`text-white transition-all ease-in-out duration-150 gap-x-5 flex flex-col absolute top-[76px] left-0 right-0 sm:flex sm:flex-row sm:static capitalize bg-slate-900 font-poppins select-none ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to=""
            className={`hover:text-orange-400 px-5 py-5 cursor-pointer hover:bg-slate-800 ${
              !isAdmin ? "hidden" : "block"
            }`}
          >
            Home
          </Link>

          {/* Dashboard Link */}
          <Link
            to="/dashboard"
            className={`hover:text-orange-400 px-5 py-5 cursor-pointer hover:bg-slate-800 ${
              !isAdmin ? "hidden" : "block"
            }`}
          >
            dashboard
          </Link>

          {/* document Link */}
          <Link
            to="documents"
            className={`hover:text-orange-400 px-5 py-5 cursor-pointer hover:bg-slate-800 $`}
          >
            documents
          </Link>

          {/* valdymas intelligence materials */}
          <a
            href="https://valdymasintelligence.org/valdymas-institute/"
            className={`hover:text-orange-400 px-5 py-5 cursor-pointer hover:bg-slate-800 $`}
          >
            materials
          </a>

          {/* profile */}
          <Link
            to="/profile"
            className={`hover:text-orange-400 px-5 py-5 cursor-pointer hover:bg-slate-800 $`}
          >
            profile
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
