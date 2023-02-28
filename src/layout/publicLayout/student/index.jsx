import { lazy } from "react";
import { Outlet } from "react-router-dom";
import Loadable from "../../../components/loadable";
import { useIsAuthorized } from "../../../hooks/useAuth";

import Navbar from "../../../components/public/navbar";
const Footer = Loadable(lazy(() => import("../../../components/public/footer")));

const studentLayout = () => {
  useIsAuthorized();

  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-900 to-slate-700 publicLayout">
      <header className="publicHeader">
        <Navbar />
      </header>
      <main className="publicMain">
        <Outlet />;
      </main>
      <div className="publicFooter">
        <Footer />
      </div>
    </div>
  );
};

export default studentLayout;
