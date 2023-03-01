import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import PathArrow from "../../components/ui/pathArrow";

const AdminLayout = () => {
  const [currentPath, setCurrentPath] = useState("");

  const RelativePath = () => {
    return (
      <div className="flex items-center justify-between capitalize cursor-pointer font-poppins text-[11px] sm:text-sm">
        <Link to="/">
          <span className="material-symbols-outlined text-slate-200 text-[18px] sm:text-xl">
            home
          </span>
        </Link>
        <PathArrow />
        <Link to="/admins">admins</Link>
        <PathArrow />
        <span className="text-red-900 font-medium">{currentPath}</span>
      </div>
    );
  };

  return (
    <div className={`w-full h-full bg-white new rounded-2xl font-poppins`}>
      <header
        className={`flex items-center justify-between p-5 border-b border-b-slate-200 bg-black text-gray-100 rounded-t-2xl `}
      >
        <h2 className="text-lg capitalize select-none new--student font-poppins ">
          Administrators
        </h2>

        <div className="pathTrack">
          <RelativePath />
        </div>
      </header>
      <Outlet context={[currentPath, setCurrentPath]} />
    </div>
  );
};

export default AdminLayout;
