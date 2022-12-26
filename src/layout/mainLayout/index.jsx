import React from "react";
import { Navbar, Aside } from "../../components";
import { useProSidebar } from "react-pro-sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="relative h-[300px]">
      <header className="h-[90px] bg-white fixed z-20 left-0 right-0 flex justify-center items-center">
        <Navbar />
      </header>

      <section className="p-2 sm:p-0 fixed right-0 top-[90px] w-full h-full flex">
        <aside className="hidden md:block bg-white ">
          <Aside />
        </aside>

        <main className="bg-[#E3F2FD] p-3 border rounded-2xl h-full w-full overflow-scroll">
          {children}
        </main>
      </section>
    </div>
  );
};

export default MainLayout;
