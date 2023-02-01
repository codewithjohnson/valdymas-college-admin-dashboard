import { nanoid } from "nanoid";

export const initialState = {
  setYearRange: "",
  biodata: {
    firstname: "",
    lastname: "",
    middlename: "",
    email: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: null,
    contactAddress: "",
    religion: "",
    nationality: "",
    maritalStatus: "",
    stateOfOrigin: "",
    lga: "",
  },
  dataCapture: {
    olevelResult: {
      selectFiles: "",
      data: null,
      status:false,
    },
    passport: {
      selectFiles: "",
      data: null,
      status:false,
    },
  },
  programme: {
    modeOfEntry: "",
    department: "",
    courseOfStudy: "",
    subject1: "",
    subject2: "",
    subject3: "",
  },
  olevels: {
    GlobalsittingNumber: "",
    sittingOne: {
      firstSittingexamType: "",
      firstSittingexamYear: "",
      firstSittingexamNumber: "",
      firstSittingexam: "",
      subjectOne: { id: nanoid(), subject: "", grade: "" },
      subjectTwo: { id: nanoid(), subject: "", grade: "" },
      subjectThree: { id: nanoid(), subject: "", grade: "" },
      subjectFour: { id: nanoid(), subject: "", grade: "" },
      subjectFive: { id: nanoid(), subject: "", grade: "" },
      subjectSix: { id: nanoid(), subject: "", grade: "" },
      subjectSeven: { id: nanoid(), subject: "", grade: "" },
      subjectEight: { id: nanoid(), subject: "", grade: "" },
      subjectNine: { id: nanoid(), subject: "", grade: "" },
    },
    sittingTwo: {
      secondSittingexamType: "",
      secondSittingexamYear: "",
      secondSittingexamNumber: "",
      secondSittingexam: "",
      subjectOne: { id: nanoid(), subject: "", grade: "" },
      subjectTwo: { id: nanoid(), subject: "", grade: "" },
      subjectThree: { id: nanoid(), subject: "", grade: "" },
      subjectFour: { id: nanoid(), subject: "", grade: "" },
      subjectFive: { id: nanoid(), subject: "", grade: "" },
      subjectSix: { id: nanoid(), subject: "", grade: "" },
      subjectSeven: { id: nanoid(), subject: "", grade: "" },
      subjectEight: { id: nanoid(), subject: "", grade: "" },
      subjectNine: { id: nanoid(), subject: "", grade: "" },
    },
  },
};