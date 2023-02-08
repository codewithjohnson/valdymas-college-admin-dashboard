import { memo, lazy, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../../services/auth/auth";
import Loadable from "../../../components/loadable";

const Navbar = Loadable(lazy(() => import("../../../components/public/navbar")));
const Footer = Loadable(lazy(() => import("../../../components/public/footer")));

const studentLayout = memo(() => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // redirect to login page if user is not logged in
  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth/login");
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-900 to-slate-700 publicLayout">
      <header className="publicHeader">
        <Navbar user={user} />
      </header>
      <main className="publicMain">
        <Outlet />;
      </main>
      <div className="publicFooter">
        <Footer />
      </div>
    </div>
  );
});

export default studentLayout;
