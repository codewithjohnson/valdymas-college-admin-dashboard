import { memo, useEffect } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import DepartmentTable from "../../../../components/dataTable/departmentTable/departmentTable";
import { useStudentsData } from "../../../../hooks/useStudents";

const SocialSciences = () => {
  const [currentPath, setCurrentPath] = useOutletContext();
  const { students } = useStudentsData();
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
          Loading social sciences students...
        </h1>
      ) : (
        <DepartmentTable studentsData={socialScienceStudents} />
      )}
    </div>
  );
};

const SocialSciencesPage = memo(SocialSciences);
export default SocialSciencesPage;
