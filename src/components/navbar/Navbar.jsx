import React, { memo, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import { useProSidebar } from "react-pro-sidebar";
import { getCurrentimeOfDay } from "../../utilities/currentDate";
import { useYearContext } from "../../context/setYears/setYears";
import { useAuth } from "../../services/auth/auth";
import AdminSettings from "../adminSettings/AdminSettings";

const Navbar = memo(() => {
  const [showSettings, setShowSettings] = useState(false);
  const { user } = useAuth();
  const [timeOfDay, setTimeOfDay] = useState("");
  const { collapseSidebar } = useProSidebar();
  const settingsRef = useRef(null);

  useEffect(() => {
    const hideSettings = (e) => {
      if (!settingsRef.current.contains(e.target)) {
        setShowSettings(false);
      }
    };
    window.addEventListener("click", hideSettings);
    return () => window.removeEventListener("click", hideSettings);
  }, [showSettings]);

  const { dispatch: yearDispatch, state: yearState } = useYearContext();
  const { setYearRange: currentYear } = yearState;

  // get user display name
  const displayName = user?.displayName.split(" ")[0];

  // handle year range change
  const HandleSetYearChange = (e) => {
    yearDispatch({ type: "SET_YEAR", payload: e.target.value });
  };

  // get current time of day
  useEffect(() => {
    const currentHour = new Date().getHours();
    setTimeOfDay(getCurrentimeOfDay(currentHour));
  }, [new Date().getHours()]);

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
        {/* Time of Day */}
        <p className="text-slate-700   font-poppins text-[15px] md:text-xl font-semibold capitalize ml-4 select-none sm:ml-8">
          good {timeOfDay}, <span className="text-red-900">{displayName}</span>{" "}
          🖐🏼
        </p>

        <div className=" flex justify-between gap-5 items-center relative">
          {/* Current Set */}
          <form className="font-poppins ">
            <select
              name="setYearRange"
              id="setYearRange"
              value={currentYear}
              onChange={HandleSetYearChange}
              className="border-none focus:outline-none focus:ring focus:ring-green-100 hover:border-green-80 cursor-pointer  text-sm text-green-900 opacity-70  bg-green-100 hover:bg-green-300 py-3 rounded-t-lg"
            >
              <option value="2021-2022">2021-2022</option>
              <option value="2022-2023">2022-2023</option>
              <option disabled value="2023-2024">
                2023-2024
              </option>
            </select>
          </form>

          {/* Current Admin Logged in */}
          <div
            ref={settingsRef}
            onClick={() => setShowSettings(!showSettings)}
            className="flex w-full flex-row justify-between gap-4 px-3 py-2 items-center cursor-pointer bg-sky-100 hover:bg-blue-400 rounded-full hover:text-gray-200 text-blue-400 transition-all ease-in-out duration-200"
          >
            <img
              src={user?.photoURL || "https://i.pravatar.cc/150?img=32"}
              alt="avatar"
              className="w-8 h-8 rounded-full flex justify-center items-center flex-row"
            />
            <span className="material-symbols-outlined ">settings</span>
          </div>

          <div
            className={`absolute top-[75px] right-2 z-20 shadow-2xl ${
              showSettings ? "block" : "hidden"
            } `}
          >
            <AdminSettings />
          </div>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
