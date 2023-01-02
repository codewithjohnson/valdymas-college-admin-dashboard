import { object, string, number, boolean, date } from "yup";

// first sitting subjects and grades
export const firstSittingSubjectsAndGrades = [
  "olevel_one_1",
  "olevel_one_2",
  "olevel_one_3",
  "olevel_one_4",
  "olevel_one_5",
  "olevel_one_6",
  "olevel_one_7",
  "olevel_one_8",
  "olevel_one_9",
  "grade_one_1",
  "grade_one_2",
  "grade_one_3",
  "grade_one_4",
  "grade_one_5",
  "grade_one_6",
  "grade_one_7",
  "grade_one_8",
  "grade_one_9",
];

// second sitting subjects and grades
export const secondSittingSubjectsAndGrades = [
  "olevel_two_1",
  "olevel_two_2",
  "olevel_two_3",
  "olevel_two_4",
  "olevel_two_5",
  "olevel_two_6",
  "olevel_two_7",
  "olevel_two_8",
  "olevel_two_9",
  "grade_two_1",
  "grade_two_2",
  "grade_two_3",
  "grade_two_4",
  "grade_two_5",
  "grade_two_6",
  "grade_two_7",
  "grade_two_8",
  "grade_two_9",
];

export const firstSittingSchema = object({
  firstSittingexamType: string().required("this is required"),
  firstSittingexamYear: string().required("this is required"),
  firstSittingexamNumber: string().required("this is required"),
  firstSittingexam: string().required("this is required"),
  olevel_one_1: string().required("this is required"),
  olevel_one_2: string().required("this is required"),
  olevel_one_3: string().required("this is required"),
  olevel_one_4: string().required("this is required"),
  olevel_one_5: string().required("this is required"),
  olevel_one_6: string().required("this is required"),
  olevel_one_7: string().required("this is required"),
  olevel_one_8: string().required("this is required"),
  olevel_one_9: string().required("this is required"),
  grade_one_1: string().required("this is required"),
  grade_one_2: string().required("this is required"),
  grade_one_3: string().required("this is required"),
  grade_one_4: string().required("this is required"),
  grade_one_5: string().required("this is required"),
  grade_one_6: string().required("this is required"),
  grade_one_7: string().required("this is required"),
  grade_one_8: string().required("this is required"),
  grade_one_9: string().required("this is required"),
});

export const secondSittingSchema = object({
  secondSittingexamType: string().required("this is required"),
  secondSittingexamYear: string().required("this is required"),
  secondSittingexamNumber: string().required("this is required"),
  secondSittingexam: string().required("this is required"),
  olevel_two_1: string().required("this is required"),
  olevel_two_2: string().required("this is required"),
  olevel_two_3: string().required("this is required"),
  olevel_two_4: string().required("this is required"),
  olevel_two_5: string().required("this is required"),
  olevel_two_6: string().required("this is required"),
  olevel_two_7: string().required("this is required"),
  olevel_two_8: string().required("this is required"),
  olevel_two_9: string().required("this is required"),
  grade_two_1: string().required("this is required"),
  grade_two_2: string().required("this is required"),
  grade_two_3: string().required("this is required"),
  grade_two_4: string().required("this is required"),
  grade_two_5: string().required("this is required"),
  grade_two_6: string().required("this is required"),
  grade_two_7: string().required("this is required"),
  grade_two_8: string().required("this is required"),
  grade_two_9: string().required("this is required"),
});
