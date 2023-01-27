import React, { memo, lazy, useState, useEffect } from "react";
import { getStudentsData } from "../../../services/firestore/students/students";
import { useStudentContext } from "../../../context/students";

// material ui
import Tooltip from "@mui/material/Tooltip";

// components
import Loadable from "../../../components/Loadable";

// data table
const StudentsTable = Loadable(
  lazy(() => import("../../../components/dataTable/students/StudentsTable"))
);

const AllStudents = memo(() => {
  const [students, setStudents] = useState([]);
  const { state } = useStudentContext();
  const { setYearRange } = state;

  useEffect(() => {
    const getStudents = async () => {
      const students = await getStudentsData(setYearRange);
      setStudents(students);
    };
    getStudents();
  }, []);

  return (
    <div className="w-full h-full bg-white new rounded-2xl pb-8 font-poppins ">
      <h3 className="capitalize text-lg border-b border-b-slate-200 p-5 ">
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
      <StudentsTable studentsData={students} />
    </div>
  );
});

export default AllStudents;
