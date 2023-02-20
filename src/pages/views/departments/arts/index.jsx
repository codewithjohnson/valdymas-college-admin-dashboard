import { memo } from "react";
import { useStudentFromDBContext } from "../../../../context/getstudentDB/getstudent";

const Arts = () => {
  const { students } = useStudentFromDBContext();

  // get students whose department is arts
  const artsStudents = students.filter((student) => {
    return student.studentInfo[3].department === "arts";
  });

  return <div>Arts</div>;
};

const ArtsPage = memo(Arts);
export default ArtsPage;
