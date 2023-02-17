import axios from "axios";

import {
  getNumberOfStudents,
  getyearRangeLastSubstring,
  transformNumberOfStudents,
} from "../../services/firestore/students/students";

export const generateStudentId = async (setYearRange, department) => {
  // get length of students registered
  const numberOfStudents = await getNumberOfStudents(setYearRange);
  const currentStudentNumber = numberOfStudents + 1;

  // get department code
  const departmentCode = department.substring(0, 3);

  // transform the number of students to a 4 digit number
  const transformedNumberOfStudents =
    transformNumberOfStudents(currentStudentNumber);

  // get the last 2 digits of the year from the above year range
  const yearRangeLastSubstring = getyearRangeLastSubstring(setYearRange);

  // create student school ID
  const studentSchoolID = `VAL-${yearRangeLastSubstring}-${departmentCode}-${transformedNumberOfStudents}`;
  return studentSchoolID;
};

export const getStudentIdFromAdmin = async (setYearRange, studentData) => {
  const { biodata, programme } = studentData;
  const { firstname, lastname, email } = biodata;
  const { department } = programme;

  const studentID = await generateStudentId(setYearRange, department);
  const newStudent = {
    displayName: `${firstname} ${lastname}`,
    email: email,
    studentID: studentID,
    password: `${lastname}123`,
  };

  // send new student data to the backend
  const res = await axios.post("http://localhost:3000/api/student", newStudent);
  return res.data;
};
