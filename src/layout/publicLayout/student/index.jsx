import { memo } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../../components/public/navbar";

const studentLayout = memo(() => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />;
      </main>
    </div>
  );
});

export default studentLayout;
