import React, { memo, lazy, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// firestore
import { getDocs, onSnapshot } from "firebase/firestore";

// context
import { useYearContext } from "../../../context/setYears/setYears";

// services
import {
  getStudentsCollectionRef,
  createStudentInfoCollection,
} from "../../../services/firestore/students/students";

// material ui
import Tooltip from "@mui/material/Tooltip";

// components
import Loadable from "../../../components/Loadable/Loadable";

// data table
const StudentsTable = Loadable(
  lazy(() => import("../../../components/dataTable/students/StudentsTable"))
);

const AllStudents = memo(() => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const { state: yearState } = useYearContext();
  const { setYearRange: currentYear } = yearState;

  // get students data from firestore and set it to state on mount and on refresh
  const getStudentsDataListener = async () => {
    const studentsCollectionRef = await getStudentsCollectionRef(currentYear);
    const unsubscribe = onSnapshot(
      studentsCollectionRef,
      async (querySnapshot) => {
        const studentsInfo = await Promise.all(
          querySnapshot.docs.map(async (studentDoc) => {
            const studentID = studentDoc.id;
            const studentInfoCollectionRef = await createStudentInfoCollection(
              currentYear,
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
      }
    );
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

          <Tooltip title="add student" placement="top" arrow>
            <span
              onClick={() => navigate("/students/add-student")}
              className="material-symbols-outlined  select-none p-2 cursor-pointer text-[23px] bg-blue-700 rounded-full text-gray-300 hover:rounded-full"
            >
              add
            </span>
          </Tooltip>
        </div>
      </div>

      {/* DATA TABLE */}
      {students.length <= 0 ? (
        <h1 className="text-center text-xl text-gray-500  font-poppins">
          Loading all students....
        </h1>
      ) : (
        <StudentsTable studentsData={students} />
      )}
    </div>
  );
});

export default AllStudents;
