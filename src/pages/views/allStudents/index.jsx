import React, { memo, lazy, useState, useEffect } from "react";

// firestore
import {
  getDocs,
  onSnapshot,
} from "firebase/firestore";

// context
import { useStudentContext } from "../../../context/students";

// services
import {
  getStudentsCollectionRef,
  createStudentInfoCollection,
} from "../../../services/firestore/students/students";


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

  // get students data from firestore and set it to state on mount and on refresh
  const getStudentsDataListener = async () => {
    const studentsCollectionRef = await getStudentsCollectionRef(setYearRange);
    const unsubscribe = onSnapshot(studentsCollectionRef, async (querySnapshot) => {
      const studentsInfo = await Promise.all(
        querySnapshot.docs.map(async (studentDoc) => {
          const studentID = studentDoc.id;
          const studentInfoCollectionRef = await createStudentInfoCollection(
            setYearRange,
            studentID
          );
          const studentInfoDocs = await getDocs(studentInfoCollectionRef);
          const studentInfo = studentInfoDocs.docs.map((doc) => {
            return { ...doc.data() };
          });
          return { studentID, studentInfo };
        })
      );
      setStudents(studentsInfo);
    });
    return unsubscribe;
  };

  useEffect(() => {
    getStudentsDataListener();
  }, []);

  return (
    <div className="w-full h-full bg-white new rounded-2xl pb-8 font-poppins ">
      <header>
        <h3 className="capitalize text-lg border-b border-b-slate-200 p-5 ">
          students list
        </h3>
      </header>

      {/* STUDENT UTILS */}
      <div className="studentUtils p-5 py-2 flex-col sm:flex sm:flex-row justify-end items-center  ">
        <div className="utilActions mt-5 sm:mt-0 flex items-center gap-x-3 sm:gap-x-2">
          <Tooltip
            onClick={getStudentsDataListener}
            title="refresh"
            placement="top"
            arrow
          >
            <span className="material-symbols-outlined select-none p-3 cursor-pointer text-slate-600 text-[23px] hover:bg-gray-200 hover:rounded-full">
              autorenew
            </span>
          </Tooltip>

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
