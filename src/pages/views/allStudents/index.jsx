import React, { useState, memo, useEffect, lazy } from "react";
import { getAllStudentsInfoDocs } from "../../../services/firestore/students/students";
import Loadble from "../../../components/Loadable";
const StudentsTable = Loadble(
  lazy(() => import("../../../components/dataTable/students/StudentsTable"))
);

// material ui
import Tooltip from "@mui/material/Tooltip";

const AllStudents = memo(() => {
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    const getAllStudents = async () => {
      const studentsDocs = await getAllStudentsInfoDocs();
      setStudentsData(studentsDocs);
    };
    getAllStudents();
  }, []);

  return (
    <div className="w-full h-full bg-white new rounded-2xl pb-8 font-poppins">
      <h3 className="capitalize text-lg border-b border-b-slate-200 p-5">
        students list
      </h3>

      {/* STUDENT UTILS */}
      <div className="studentUtils p-5 flex-col sm:flex sm:flex-row justify-end items-center  ">
        <div className="utilActions mt-5 sm:mt-0 flex items-center gap-x-3 sm:gap-x-2">
          <Tooltip title="print" placement="top" arrow>
            <span className=" material-symbols-outlined select-none p-3 cursor-pointer text-slate-600 text-[23px] hover:bg-gray-200 hover:rounded-full">
              print
            </span>
          </Tooltip>

          <Tooltip title="delete" placement="top" arrow>
            <span className="material-symbols-outlined select-none  p-3 cursor-pointer text-slate-600 text-[23px] hover:bg-red-200 hover:rounded-full">
              delete
            </span>
          </Tooltip>
        </div>
      </div>

      {/* DATA TABLE */}
      <StudentsTable studentsData={studentsData} />
    </div>
  );
});

export default AllStudents;
