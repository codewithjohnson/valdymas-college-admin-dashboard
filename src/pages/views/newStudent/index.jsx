import React, { useState, memo } from "react";
import { Outlet, Link } from "react-router-dom";
import PathArrow from "../../../components/ui/pathArrow";

const NewStudent = memo(() => {
  const [currentPath, setCurrentPath] = useState("");

  const RelativePath = () => {
    return (
      <div className="flex items-center justify-between capitalize cursor-pointer font-poppins text-[11px] sm:text-sm">
        <Link to="/">
          <span className="material-symbols-outlined text-slate-500 text-[18px] sm:text-xl">
            home
          </span>
        </Link>
        <PathArrow />
        <Link to="/students">students</Link>
        <PathArrow />
        <span className="text-red-900 font-medium">{currentPath}</span>
      </div>
    );
  };

  return (
    <div className="w-full h-full bg-white new rounded-2xl">
      <header className="flex items-center justify-between p-5 border-b border-b-slate-200 ">
        <h2 className="text-lg capitalize select-none new--student font-poppins">
          new student
        </h2>

        <div className="pathTrack">
          <RelativePath />
        </div>
      </header>
      <div className="newStudentForm">
        <Outlet context={[currentPath, setCurrentPath]} />
      </div>
    </div>
  );
});

export default NewStudent;
