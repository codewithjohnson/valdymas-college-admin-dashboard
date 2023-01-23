import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const NewStudent = () => {
  const [currentPath, setCurrentPath] = useState("");

  const RelativePath = () => {
    return (
      <div className="flex items-center justify-between capitalize cursor-pointer font-poppins text-sm">
        <Link to="/">
          <span className="material-symbols-outlined text-slate-500 text-xl">home</span>
        </Link>
        <span className="material-symbols-outlined text-[11px] text-slate-500 font-thin flex items-center ml-4 mr-4">
          arrow_forward_ios
        </span>
        <Link to="/students">students</Link>
        <span className="material-symbols-outlined text-[11px] text-slate-500 font-thin flex items-center ml-4 mr-4">
          arrow_forward_ios
        </span>
        {currentPath}
      </div>
    );
  };

  return (
    <div className="w-full h-full bg-white new rounded-2xl">
      <div className="flex items-center justify-between p-5 border-b border-b-slate-200 ">
        <h2 className="text-lg capitalize select-none new--student font-poppins">
          new student
        </h2>

        <div className="pathTrack">
          <RelativePath />
        </div>
      </div>
      <div className="newStudentForm">
        <Outlet context={[currentPath, setCurrentPath]} />
      </div>
    </div>
  );
};

export default NewStudent;
