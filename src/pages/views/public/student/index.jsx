import React, { memo, useState, useEffect } from "react";
import { getStudentDoc } from "../../../../services/firestore/students/students";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useStudentContext } from "../../../../context/students";

// components
import ProfilePic from "../../../../components/public/student/profile";
import Biodata from "../../../../components/public/student/biodata";
import Olevels from "../../../../components/public/student/olevels";
import Programme from "../../../../components/public/student/programme";

const Student = memo(() => {
  const [student, setStudent] = useState(null);
  const { state } = useStudentContext();
  const { setYearRange } = state;
  const { studentID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getStudent = async () => {
      const studentDoc = await getStudentDoc(setYearRange, studentID);
      setStudent(studentDoc);
    };
    getStudent();
  }, []);

  return (
    <div className=" text-gray-200 font-poppins mt-10 px-5 sm:px-10">
      <div className="studentPageGrid gap-x-5 gap-y-5">
        <ProfilePic student={student} />
        <Biodata student={student} />
        <Olevels student={student} />
        <Programme student={student} />
      </div>
    </div>
  );
});
export default Student;
