import React, { memo, useState, useEffect, useRef } from "react";
import { publicMenuItems } from "../../../utilities/public/menu";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const menuLinks = publicMenuItems;

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
      console.log("logout");
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
                className="hover:text-orange-400 px-5 py-5 cursor-pointer hover:bg-slate-800"
                onClick={() => HandleOnclick(link)}
              >
                {link.side === "server" ? (
                  <a target="_blank" href={link.link}>
                    {link.name}
                  </a>
                ) : (
                  <Link to={link.link}>{link.name}</Link>
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
