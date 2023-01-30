import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Student = () => {
  const navigate = useNavigate();
  const { studentID } = useParams();
  

  return (
    <div className="student-details bg-white rounded-2xl h-full w-full font-poppins">
      <header className="flex items-center justify-between p-5 border-b border-b-slate-200 ">
        <h2 className="text-gray-600">Student Details</h2>
      </header>
    </div>
  );
};

export default Student;
