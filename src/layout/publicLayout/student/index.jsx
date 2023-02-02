import { memo } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const studentLayout = memo(() => {
  return <Outlet />;
});

export default studentLayout;
