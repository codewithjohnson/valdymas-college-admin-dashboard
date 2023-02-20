import { memo, useEffect, useState } from "react";
import { useStudentFromDBContext } from "../../../../context/getstudentDB/getstudent";
import { useLocation, useOutletContext } from "react-router-dom";
import DepartmentTable from "../../../../components/dataTable/departmentTable/departmentTable";

const SocialSciences = () => {
  const [currentPath, setCurrentPath] = useOutletContext();
  const { students } = useStudentFromDBContext();
  const { pathname } = useLocation();

  useEffect(() => {
    setPath();
  }, [pathname]);

  function setPath() {
    const lastPath = pathname.split("/").pop();
    currentPath !== lastPath && setCurrentPath(lastPath);
  }

  const socialScienceStudents = students.filter((student) => {
    return student.studentInfo[3].department === "social sciences";
  });

  return (
    <div>
      {socialScienceStudents.length <= 0 ? (
        <h1 className="text-center text-xl mt-10 text-gray-500 font-poppins">
          No student found yet....
        </h1>
      ) : (
        <DepartmentTable studentsData={socialScienceStudents} />
      )}
    </div>
  );
};

const SocialSciencesPage = memo(SocialSciences);
export default SocialSciencesPage;
