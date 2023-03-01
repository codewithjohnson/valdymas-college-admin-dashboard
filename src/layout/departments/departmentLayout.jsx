import { memo, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import PathArrow from "../../components/ui/pathArrow";

const Department = () => {
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
        <Link to="" className={``}>
          department
        </Link>
        <PathArrow />
        <span className="text-red-900 font-medium">{currentPath}</span>
      </div>
    );
  };

  return (
    <div>
      <header
        className={`${
          currentPath === "sciences"
            ? "bg-teal-200"
            : currentPath === "arts"
            ? "bg-blue-200"
            : currentPath === "social-sciences"
            ? "bg-green-200"
            : "bg-gray-200"
        } p-5 rounded-t-2xl flex flex-row justify-between items-center font-poppins`}
      >
        <h3 className="capitalize text-lg">{currentPath}</h3>
        <div className="pathTrack">
          <RelativePath />
        </div>
      </header>
      <Outlet context={[currentPath, setCurrentPath]} />
    </div>
  );
};

const DepartmentPage = memo(Department);
export default DepartmentPage;
