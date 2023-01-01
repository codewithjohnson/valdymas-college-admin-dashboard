import { object, string, number, boolean, date } from "yup";

// first sitting subjects and grades
export const firstSittingSubjectsAndGrades = [
  "olevel_one_1",
  // "olevel_one_2",
  // "olevel_one_3",
  // "olevel_one_4",
  // "olevel_one_5",
  // "olevel_one_6",
  // "olevel_one_7",
  // "olevel_one_8",
  // "olevel_one_9",
  "grade_one_1",
  // "grade_one_2",
  // "grade_one_3",
  // "grade_one_4",
  // "grade_one_5",
  // "grade_one_6",
  // "grade_one_7",
  // "grade_one_8",
  // "grade_one_9",
];

// second sitting subjects and grades
export const secondSittingSubjectsAndGrades = [
  "olevel_two_1",
  // "olevel_two_2",
  // "olevel_two_3",
  // "olevel_two_4",
  // "olevel_two_5",
  // "olevel_two_6",
  // "olevel_two_7",
  // "olevel_two_8",
  // "olevel_two_9",
  "grade_two_1",
  // "grade_two_2",
  // "grade_two_3",
  // "grade_two_4",
  // "grade_two_5",
  // "grade_two_6",
  // "grade_two_7",
  // "grade_two_8",
  // "grade_two_9",
];

export const olevelSchema = object({
  sittingNumber: string().required("Sitting number is required"),
  firstSittingexamType: string().required("this is required"),
  firstSittingexamYear: string().required("this is required"),
  firstSittingexamNumber: string().required("this is required"),
  firstSittingexam: string().required("this is required"),
  olevel_one_1: string().required("this is required"),
  // olevel_one_2: string().required("this is required"),
  // olevel_one_3: string().required("this is required"),
  // olevel_one_4: string().required("this is required"),
  // olevel_one_5: string().required("this is required"),
  // olevel_one_6: string().required("this is required"),
  // olevel_one_7: string().required("this is required"),
  // olevel_one_8: string().required("this is required"),
  // olevel_one_9: string().required("this is required"),
  grade_one_1: string().required("this is required"),
  // grade_one_2: string().required("this is required"),
  // grade_one_3: string().required("this is required"),
  // grade_one_4: string().required("this is required"),
  // grade_one_5: string().required("this is required"),
  // grade_one_6: string().required("this is required"),
  // grade_one_7: string().required("this is required"),
  // grade_one_8: string().required("this is required"),
  // grade_one_9: string().required("this is required"),
});

export const firstSittingSubjectSchema = object({
  firstSittingexamType: string().required("this is required"),
  firstSittingexamYear: string().required("this is required"),
  firstSittingexamNumber: string().required("this is required"),
  firstSittingexam: string().required("this is required"),
  olevel_one_1: string().required("this is required"),
  // olevel_one_2: string().required("this is required"),
  // olevel_one_3: string().required("this is required"),
  // olevel_one_4: string().required("this is required"),
  // olevel_one_5: string().required("this is required"),
  // olevel_one_6: string().required("this is required"),
  // olevel_one_7: string().required("this is required"),
  // olevel_one_8: string().required("this is required"),
  // olevel_one_9: string().required("this is required"),
  grade_one_1: string().required("this is required"),
  // grade_one_2: string().required("this is required"),
  // grade_one_3: string().required("this is required"),
  // grade_one_4: string().required("this is required"),
  // grade_one_5: string().required("this is required"),
  // grade_one_6: string().required("this is required"),
  // grade_one_7: string().required("this is required"),
  // grade_one_8: string().required("this is required"),
  // grade_one_9: string().required("this is required"),
});

export const secondSittingSubjectSchema = object({
  secondSittingexamType: string().required("this is required"),
  secondSittingexamYear: string().required("this is required"),
  secondSittingexamNumber: string().required("this is required"),
  secondSittingexam: string().required("this is required"),
  olevel_two_1: string().required("this is required"),
  // olevel_two_2: string().required("this is required"),
  // olevel_two_3: string().required("this is required"),
  // olevel_two_4: string().required("this is required"),
  // olevel_two_5: string().required("this is required"),
  // olevel_two_6: string().required("this is required"),
  // olevel_two_7: string().required("this is required"),
  // olevel_two_8: string().required("this is required"),
  // olevel_two_9: string().required("this is required"),
  grade_two_1: string().required("this is required"),
  // grade_two_2: string().required("this is required"),
  // grade_two_3: string().required("this is required"),
  // grade_two_4: string().required("this is required"),
  // grade_two_5: string().required("this is required"),
  // grade_two_6: string().required("this is required"),
  // grade_two_7: string().required("this is required"),
  // grade_two_8: string().required("this is required"),
  // grade_two_9: string().required("this is required"),
});

export const SetFormValuesForSittingTwo = (setValue) => {
  setValue("secondSittingexamType", "");
  setValue("secondSittingexamYear", "");
  setValue("secondSittingexamNumber", "");
  setValue("secondSittingexam", "");
  setValue("olevel_two_1", "");
  // setValue("olevel_two_2", "");
  // setValue("olevel_two_3", "");
  // setValue("olevel_two_4", "");
  // setValue("olevel_two_5", "");
  // setValue("olevel_two_6", "");
  // setValue("olevel_two_7", "");
  // setValue("olevel_two_8", "");
  // setValue("olevel_two_9", "");
  setValue("grade_two_1", "");
  // setValue("grade_two_2", "");
  // setValue("grade_two_3", "");
  // setValue("grade_two_4", "");
  // setValue("grade_two_5", "");
  // setValue("grade_two_6", "");
  // setValue("grade_two_7", "");
  // setValue("grade_two_8", "");
  // setValue("grade_two_9", "");
};
