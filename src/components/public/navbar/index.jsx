import React, { memo, useState, useEffect, useRef } from "react";
import { publicMenuItems } from "../../../utilities/public/menu";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

// services
import { checkAdminExists } from "../../../services/firestore/students/students";

const Navbar = memo(({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const menuRef = useRef(null);
  const menuLinks = publicMenuItems;

  // Todo: get this from local storage: year range
  const yearRange = "2022-2023";

  // get user id
  const userID = user?.uid;

  // check if user is admin
  useEffect(() => {
    const checkAdmin = async () => {
      const admin = await checkAdminExists(yearRange, userID);
      setIsAdmin(admin);
    };
    checkAdmin();
  }, [user]);

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

  const HandleOnclick = (link) => {
    if (link.name === "logout") {
      return;
    }
  };

  return (
    <nav
      ref={menuRef}
      className="  relative w-full bg-gradient-to-r from-slate-900 to-slate-700"
    >
      <div className=" sm:py-6 sm:px-10 px-5 py-5 flex flex-row justify-between items-center">
        <div className="logo flex flex-row  items-center gap-3 select-none text-gray-100">
          <img src={logo} alt="" className="h-9 w-9 sm:h-12 sm:w-12" />
          <p className="font-semibold text-lg text-orange-400 sm:text-2xl">VCAPS</p>
        </div>

        {/* right */}

        <span
          onClick={() => setIsOpen(!isOpen)}
          className="material-symbols-outlined text-gray-200 sm:hidden cursor-pointer select-none"
        >
          menu
        </span>

        {/* menu items */}
        <ul
          className={`text-white transition-all ease-in-out duration-150 gap-x-5 absolute top-[76px] left-0 right-0 sm:flex sm:flex-row sm:static capitalize bg-slate-900 font-poppins select-none ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {menuLinks.map((link, index) => {
            return (
              <li
                key={index}
                className={`hover:text-orange-400 px-5 py-5 cursor-pointer hover:bg-slate-800 ${
                  link.permission === "admin" && !isAdmin ? "hidden" : "block"
                }`}
                onClick={() => HandleOnclick(link)}
              >
                {link.side === "server" ? (
                  <a target="_blank" href={link.link}>
                    {link.name}
                  </a>
                ) : (
                  <Link
                    className={`${link.permission === "admin" && isAdmin ? "" : ""}`}
                    to={link.link}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;
