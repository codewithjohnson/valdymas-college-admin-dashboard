import { nanoid } from "nanoid";

const olevels = {
  sittingOne: {
    // subjectOne: { id: nanoid(), subject: "", grade: "" },
    // subjectTwo: { id: nanoid(), subject: "", grade: "" },
    // subjectThree: { id: nanoid(), subject: "", grade: "" },
    // subjectFour: { id: nanoid(), subject: "", grade: "" },
    // subjectFive: { id: nanoid(), subject: "", grade: "" },
    // subjectSix: { id: nanoid(), subject: "", grade: "" },
    // subjectSeven: { id: nanoid(), subject: "", grade: "" },
    // subjectEight: { id: nanoid(), subject: "", grade: "" },
    // subjectNine: { id: nanoid(), subject: "", grade: "" },
  },
  sittingTwo: {
    // subjectOne: { id: nanoid(), subject: "", grade: "" },
    // subjectTwo: { id: nanoid(), subject: "", grade: "" },
    // subjectThree: { id: nanoid(), subject: "", grade: "" },
    // subjectFour: { id: nanoid(), subject: "", grade: "" },
    // subjectFive: { id: nanoid(), subject: "", grade: "" },
    // subjectSix: { id: nanoid(), subject: "", grade: "" },
    // subjectSeven: { id: nanoid(), subject: "", grade: "" },
    // subjectEight: { id: nanoid(), subject: "", grade: "" },
    // subjectNine: { id: nanoid(), subject: "", grade: "" },
  },
};

export const OlevelsReducer = (state = olevels, action) => {
  switch (action.type) {
    case "OLEVELS/SITTING_ONE":
      return {
        ...state,
        sittingOne: {
          firstSittingexamType: action.payload.firstSittingexamType,
          firstSittingexamYear: action.payload.firstSittingexamYear,
          firstSittingexamNumber: action.payload.firstSittingexamNumber,
          firstSittingexam: action.payload.firstSittingexam,
          subjectOne: { id: nanoid(), subject: action.payload.olevel_one_1, grade: action.payload.grade_one_1 },
          subjectTwo: { id: nanoid(), subject: action.payload.olevel_one_2, grade: action.payload.grade_one_2 },
          subjectThree: { id: nanoid(), subject: action.payload.olevel_one_3, grade: action.payload.grade_one_3 },
          subjectFour: { id: nanoid(), subject: action.payload.olevel_one_4, grade: action.payload.grade_one_4 },
          subjectFive: { id: nanoid(), subject: action.payload.olevel_one_5, grade: action.payload.grade_one_5 },
          subjectSix: { id: nanoid(), subject: action.payload.olevel_one_6, grade: action.payload.grade_one_6 },
          subjectSeven: { id: nanoid(), subject: action.payload.olevel_one_7, grade: action.payload.grade_one_7 },
          subjectEight: { id: nanoid(), subject: action.payload.olevel_one_8, grade: action.payload.grade_one_8 },
          subjectNine: { id: nanoid(), subject: action.payload.olevel_one_9, grade: action.payload.grade_one_9 },
        },
      };
    case "OLEVELS/SITTING_TWO":
      return {
        ...state,
        sittingTwo: {
          secondSittingexamType: action.payload.secondSittingexamType,
          secondSittingexamYear: action.payload.secondSittingexamYear,
          secondSittingexamNumber: action.payload.secondSittingexamNumber,
          secondSittingexam: action.payload.secondSittingexam,
          subjectOne: { id: nanoid(), subject: action.payload.olevel_two_1, grade: action.payload.grade_two_1 },
          subjectTwo: { id: nanoid(), subject: action.payload.olevel_two_2, grade: action.payload.grade_two_2 },
          subjectThree: { id: nanoid(), subject: action.payload.olevel_two_3, grade: action.payload.grade_two_3 },
          subjectFour: { id: nanoid(), subject: action.payload.olevel_two_4, grade: action.payload.grade_two_4 },
          subjectFive: { id: nanoid(), subject: action.payload.olevel_two_5, grade: action.payload.grade_two_5 },
          subjectSix: { id: nanoid(), subject: action.payload.olevel_two_6, grade: action.payload.grade_two_6 },
          subjectSeven: { id: nanoid(), subject: action.payload.olevel_two_7, grade: action.payload.grade_two_7 },
          subjectEight: { id: nanoid(), subject: action.payload.olevel_two_8, grade: action.payload.grade_two_8 },
          subjectNine: { id: nanoid(), subject: action.payload.olevel_two_9, grade: action.payload.grade_two_9 },
        },
      };

    default:
      return state;
  }
};
