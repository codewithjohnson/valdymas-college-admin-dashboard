import { memo, lazy, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loadable from "../../components/Loadable";
import { useAuth } from "../../services/auth/auth";

const Navbar = Loadable(lazy(() => import("../../components/navbar")));
const Aside = Loadable(lazy(() => import("../../components/sidebar")));

const MainLayout = memo(({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // redirect to login page if user is not verified
  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth/login");
    }
  }, [user]);

  return (
    <div className="relative h-[300px]">
      <header className="h-[95px] fixed z-20 left-0 right-0 flex justify-center items-center">
        <Navbar />
      </header>

      <section className="p-2 sm:p-0 fixed right-0 top-[95px] w-full h-full flex">
        <aside className="border-0 z-50 hidden sm:block">
          <Aside />p
        </aside>

        <main className="bg-[#E3F2FD] p-5 pb-[100px] rounded-2xl h-full w-full overflow-scroll scrollbar-none ">
          {children}
        </main>
      </section>
    </div>
  );
});

export default MainLayout;
