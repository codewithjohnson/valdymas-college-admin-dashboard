import { memo } from "react";
import { Outlet } from "react-router-dom";

const Department = () => {
  return <Outlet />;
};

const DepartmentPage = memo(Department);
export default DepartmentPage;
