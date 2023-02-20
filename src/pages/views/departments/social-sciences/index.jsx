import { memo } from "react";
import { useStudentFromDBContext } from "../../../../context/getstudentDB/getstudent";

const SocialSciences = () => {
  const { students } = useStudentFromDBContext();

  // get students whose department is social sciences
  const socialScienceStudents = students.filter((student) => {
    return student.studentInfo[3].department === "social sciences";
  });

  console.log(socialScienceStudents);

  return <div>SocialSciences</div>;
};

const SocialSciencesPage = memo(SocialSciences);
export default SocialSciencesPage;
