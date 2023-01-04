import { nanoid } from "nanoid";

const initialState = {
  modeOfEntry: "",
  department: "",
  courseOfStudy: "",
  subject1: "",
  subject2: "",
  subject3: "",
};

export const programmeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PROGRAMME/SET_PROGRAMME":
      return {
        ...state,
        modeOfEntry: action.payload.modeOfEntry,
        department: action.payload.department,
        courseOfStudy: action.payload.courseOfStudy,
        subject1: action.payload.subject1,
        subject2: action.payload.subject2,
        subject3: action.payload.subject3,
      };

    default:
      return state;
  }
};
