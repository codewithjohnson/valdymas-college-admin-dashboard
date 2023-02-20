import { memo } from "react";
import { useStudentFromDBContext } from "../../../../context/getstudentDB/getstudent";

const Sciences = () => {
  const { students } = useStudentFromDBContext();

  // get students whose department is sciences
  const scienceStudents = students.filter((student) => {
    return student.studentInfo[3].department === "sciences";
  });

  return <div>sciences</div>;
};

const SciencesPage = memo(Sciences);
export default SciencesPage;
