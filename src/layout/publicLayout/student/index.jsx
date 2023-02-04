import { memo } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../../components/public/navbar";

const studentLayout = memo(() => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-900 to-slate-700">
      <Navbar />
      <main>
        <Outlet />;
      </main>
    </div>
  );
});

export default studentLayout;
