import React, { memo, useState, useEffect } from "react";
import { getStudentDoc } from "../../../../services/firestore/students/students";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useStudentContext } from "../../../../context/students";

const Student = memo(() => {
  const navigate = useNavigate();
  const { studentID } = useParams();
  const { state } = useStudentContext();
  const { setYearRange } = state;
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const getStudent = async () => {
      const studentDoc = await getStudentDoc(setYearRange, studentID);
      setStudent(studentDoc);
    };
    getStudent();
  }, []);

  return (
    <div className="font-poppins min-h-screen w-full bg-gray-50">
      <div className="container"></div>
    </div>
  );
});
export default Student;
