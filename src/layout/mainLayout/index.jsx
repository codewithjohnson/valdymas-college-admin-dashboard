import { memo, lazy, useEffect } from "react";

import Loadable from "../../components/Loadable";
import { useAuth } from "../../services/auth/auth";
import LoaderFull from "../../components/loaderFull";

const Navbar = Loadable(lazy(() => import("../../components/navbar")));
const Aside = Loadable(lazy(() => import("../../components/sidebar")));

const MainLayout = memo(({ children }) => {
  const { user, loading } = useAuth();

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
