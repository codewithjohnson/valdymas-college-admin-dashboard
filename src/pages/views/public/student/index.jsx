import React, { memo, useState, useEffect } from "react";
import { getStudentDoc } from "../../../../services/firestore/students/students";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../services/auth/auth";

// components
import ProfilePic from "../../../../components/public/student/profile";
import Biodata from "../../../../components/public/student/biodata";
import Olevels from "../../../../components/public/student/olevels";
import Programme from "../../../../components/public/student/programme";

const Student = memo(() => {
  const { user } = useAuth();
  const [student, setStudent] = useState(null);
  const { studentID } = useParams();
  const year = "2022-2023";

  const getStudent = async () => {
    const studentDoc = await getStudentDoc(year, studentID);
    setStudent(studentDoc);
  };

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <div className=" text-gray-200 font-poppins px-5 sm:px-10 h-full w-full">
      <div className="studentPageGridMobile sm:studentPageGrid gap-x-5 gap-y-5">
        <ProfilePic student={student} />
        <Biodata student={student} />
        <Olevels student={student} />
        <Programme student={student} />
      </div>
    </div>
  );
});
export default Student;
