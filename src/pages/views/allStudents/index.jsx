import { getDocs, onSnapshot } from "firebase/firestore";
import React, { memo, useEffect } from "react";
import { getAllStudentsInfoDocs } from "../../../services/firestore/students/students";
import Tooltip from "@mui/material/Tooltip";

const Students = () => {
  useEffect(() => {
    const getAllStudents = async () => {
      const docs = await getAllStudentsInfoDocs();
      console.log(docs);
    };
    getAllStudents();
  }, []);

  // TODO: Data Grid
  // TODO: first name, last name, email, gender, department, programme, subject combination
  // TODO: Add copy, delete icon

  return (
    <div className="w-full h-full bg-white new rounded-2xl pb-8 font-poppins">
      <h3 className="capitalize text-lg border-b border-b-slate-200 p-5">students</h3>
      <div className="studentUtils p-5 flex-col sm:flex sm:flex-row justify-between items-center  ">
        {/* search container */}
        <div className="searchCont py-1 px-3 flex items-center bg-slate-100 w-[250px] border border-slate-300 rounded-xl ">
          <span className="material-symbols-outlined text-[19px] text-purple-400">search</span>
          <input
            type="text"
            placeholder="search student"
            className="border-0 outline-none bg-transparent w-full h-full text-[13px] focus:outline-none focus:ring-0  "
          />
        </div>
        <div className="utilActions mt-5 sm:mt-0 flex items-center gap-x-3 sm:gap-x-2">
          <Tooltip title="print" placement="top" arrow>
            <span className=" material-symbols-outlined select-none p-3 cursor-pointer text-slate-600 text-[23px] hover:bg-gray-200 hover:rounded-full">
              print
            </span>
          </Tooltip>

          <Tooltip title="filter" placement="top" arrow>
            <span className="material-symbols-outlined select-none p-3 cursor-pointer text-slate-600 text-[23px] hover:bg-gray-200 hover:rounded-full">
              filter_list
            </span>
          </Tooltip>

          <Tooltip title="delete" placement="top" arrow>
            <span className="material-symbols-outlined select-none  p-3 cursor-pointer text-slate-600 text-[23px] hover:bg-red-200 hover:rounded-full">
              delete
            </span>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

const AllStudents = memo(Students);
export default AllStudents;
