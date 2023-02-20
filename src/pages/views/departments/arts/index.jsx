import { memo, useEffect } from "react";
import { useStudentFromDBContext } from "../../../../context/getstudentDB/getstudent";
import { useLocation, useOutletContext } from "react-router-dom";

const Arts = () => {
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

  // get students whose department is arts
  const artsStudents = students.filter((student) => {
    return student.studentInfo[3].department === "arts";
  });

  return (
    <div>
      {artsStudents.length <= 0 ? (
        <h1 className="text-center text-xl mt-10 font-poppins">
          No student found yet....
        </h1>
      ) : (
        <DepartmentTable studentsData={artsStudents} />
      )}
    </div>
  );
};

const ArtsPage = memo(Arts);
export default ArtsPage;
