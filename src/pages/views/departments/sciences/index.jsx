import { memo, useEffect } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import DepartmentTable from "../../../../components/dataTable/departmentTable/departmentTable";
import { useStudentFromDBContext } from "../../../../context/getstudentDB/getstudent";

const Sciences = () => {
  const [currentPath, setCurrentPath] = useOutletContext();
  const { students } = useStudentFromDBContext();
  const { pathname } = useLocation();

  // get students whose department is sciences
  const scienceStudents = students.filter((student) => {
    return student.studentInfo[3]?.department === "science";
  });

  useEffect(() => {
    setPath();
  }, [pathname]);

  function setPath() {
    const lastPath = pathname.split("/").pop();
    currentPath !== lastPath && setCurrentPath(lastPath);
  }

  return (
    <div className="mt-10">
      {scienceStudents.length <= 0 ? (
        <h1 className="text-center text-xl mt-10 font-poppins">
          No student found yet....
        </h1>
      ) : (
        <DepartmentTable studentsData={scienceStudents} />
      )}
    </div>
  );
};

const SciencesPage = memo(Sciences);
export default SciencesPage;
