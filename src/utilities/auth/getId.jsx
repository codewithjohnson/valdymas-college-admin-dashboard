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
  const departmentCode = department.substring(0, 3).toUpperCase();

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
  const { firstname, lastname, email, phoneNumber } = biodata;
  const { department } = programme;

  const studentID = await generateStudentId(setYearRange, department);
  const newStudent = {
    displayName: `${firstname} ${lastname}`,
    email: email,
    phoneNumber: phoneNumber,
    studentID: studentID,
    password: `${lastname}123`,
  };

  try {
    const res = await axios.post(
      "https://us-central1-api-test-9948d.cloudfunctions.net/app/api/students/new",
      newStudent
    );
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else if (error.request) {
      throw new Error(error.request);
    } else {
      throw new Error(error);
    }
  }
};
