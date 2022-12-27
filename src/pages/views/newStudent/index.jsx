import React from "react";
import { Outlet } from "react-router-dom";

const NewStudent = () => {
  // const test = ["home","students", "add-student"];
  // const path = test.reduce((acc, curr) => {
  //   const path = acc.length ? `/${acc[acc.length - 1]}/${curr}` : curr;
  //   return [...acc, path];
  // }, []);

  return (
    <div className="w-full h-full bg-white new rounded-2xl">
      <div className="flex items-center justify-between p-5 border-b border-b-slate-200">
        <h2 className="text-lg capitalize select-none new--student font-poppins">
          new student
        </h2>

        <div className="pathTrack">{/* TODOS: create relative path */}</div>
      </div>
      <div className="newStudentForm">
        <Outlet />
      </div>
    </div>
  );
};

export default NewStudent;
