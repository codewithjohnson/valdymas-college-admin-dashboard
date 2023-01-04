import { object, string, number, boolean, date } from "yup";

export const programmeSchema = object({
  modeOfEntry: string().required("this is required"),
  department: string().required("this is required"),
  courseOfStudy: string().required("this is required"),
  subject1: string().required("this is required"),
  subject2: string().required("this is required"),
  subject3: string().required("this is required"),
});
