import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useProSidebar } from "react-pro-sidebar";
import { getCurrentimeOfDay } from "../../utilities/currentDate";
import { useStudentContext } from "../../context/students";
import { useAuth } from "../../services/auth/auth";

const Navbar = memo(() => {
  const { user } = useAuth();
  const [timeOfDay, setTimeOfDay] = useState("");
  const { collapseSidebar } = useProSidebar();
  const [yearRange, setYearRange] = useState("2022-2023");
  const { dispatch, state } = useStudentContext();

  // get user display name
  const displayName = user?.displayName.split(" ")[0];

  // set year range to state on mount
  useEffect(() => {
    dispatch({ type: "SET_YEAR_RANGE", payload: yearRange });
  }, [yearRange]);

  // get current time of day
  useEffect(() => {
    const currentHour = new Date().getHours();
    setTimeOfDay(getCurrentimeOfDay(currentHour));
  }, [new Date().getHours()]);

  // handle year range change
  const HandleSetYearChange = (e) => {
    setYearRange(e.target.value);
  };

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
        <p className="text-slate-700  font-poppins text-[15px] md:text-xl font-semibold capitalize ml-4 select-none sm:ml-8">
          good {timeOfDay}, <span className="text-red-900">{displayName}</span>{" "}
          🖐🏼
        </p>

        <div className="rl flex justify-between gap-5 items-center">
          {/* Current Set */}
          <form className="font-poppins">
            <select
              name="setYearRange"
              id="setYearRange"
              value={yearRange}
              onChange={HandleSetYearChange}
              className="border-none focus:outline-none focus:ring focus:ring-green-100 hover:border-green-80 cursor-pointer  text-sm text-green-900 opacity-70  bg-green-100"
            >
              <option value="2022-2023">2022-2023</option>
              <option value="2023-2024">2023-2024</option>
            </select>
          </form>

          {/* Current Admin Logged in */}
          <p className="hidden md:block user--profile gap-2 text-red-800 bg-red-50 p-3 font-poppins rounded-lg text-sm select-none">
            {user?.email}
          </p>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
