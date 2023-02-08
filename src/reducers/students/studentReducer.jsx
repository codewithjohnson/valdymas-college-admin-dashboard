import { nanoid } from "nanoid";

export const studentReducer = (state, action) => {
  switch (action.type) {
    case "SET_YEAR_RANGE":
      return {
        ...state,
        setYearRange: action.payload,
      };

    case "BIODATA/ADDED":
      return {
        ...state,
        biodata: {
          ...state.biodata,
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          middlename: action.payload.middlename,
          email: action.payload.email,
          phoneNumber: action.payload.phoneNumber,
          gender: action.payload.gender,
          dateOfBirth: action.payload.dateOfBirth,
          contactAddress: action.payload.contactAddress,
          religion: action.payload.religion,
          nationality: action.payload.nationality,
          maritalStatus: action.payload.maritalStatus,
          stateOfOrigin: action.payload.stateOfOrigin,
          lga: action.payload.lga,
        },
      };

    case "DATA_CAPTURE/ADD_PASSPORT":
      return {
        ...state,
        dataCapture: {
          ...state.dataCapture,
          passport: {
            ...state.dataCapture.passport,
            selectFiles: action.payload.selectFiles,
            data: action.payload.base64,
            status: true,
          },
        },
      };

    case "DATA_CAPTURE/ADD_OLEVEL_RESULT":
      return {
        ...state,
        dataCapture: {
          ...state.dataCapture,
          olevelResult: {
            ...state.dataCapture.olevelResult,
            selectFiles: action.payload.selectFiles,
            data: action.payload.base64,
            status: true,
          },
        },
      };

    case "PROGRAMME/SET_PROGRAMME":
      return {
        ...state,
        programme: {
          ...state.programme,
          modeOfEntry: action.payload.modeOfEntry,
          department: action.payload.department,
          courseOfStudy: action.payload.courseOfStudy,
          agent: action.payload.agent,
          subject1: action.payload.subject1,
          subject2: action.payload.subject2,
          subject3: action.payload.subject3,
        },
      };

    case "OLEVELS/SET_GLOBAL_SITTING_NUMBER":
      return {
        ...state,
        olevels: {
          ...state.olevels,
          GlobalsittingNumber: action.payload.GlobalsittingNumber,
        },
      };

    case "OLEVELS/SITTING_ONE":
      return {
        ...state,
        olevels: {
          ...state.olevels,
          sittingOne: {
            ...state.olevels.sittingOne,
            firstSittingexamType: action.payload.firstSittingexamType,
            firstSittingexamYear: action.payload.firstSittingexamYear,
            firstSittingexamNumber: action.payload.firstSittingexamNumber,
            firstSittingexam: action.payload.firstSittingexam,
            subjectOne: {
              id: nanoid(),
              subject: action.payload.olevel_one_1,
              grade: action.payload.grade_one_1,
            },
            subjectTwo: {
              id: nanoid(),
              subject: action.payload.olevel_one_2,
              grade: action.payload.grade_one_2,
            },
            subjectThree: {
              id: nanoid(),
              subject: action.payload.olevel_one_3,
              grade: action.payload.grade_one_3,
            },
            subjectFour: {
              id: nanoid(),
              subject: action.payload.olevel_one_4,
              grade: action.payload.grade_one_4,
            },
            subjectFive: {
              id: nanoid(),
              subject: action.payload.olevel_one_5,
              grade: action.payload.grade_one_5,
            },
            subjectSix: {
              id: nanoid(),
              subject: action.payload.olevel_one_6,
              grade: action.payload.grade_one_6,
            },
            subjectSeven: {
              id: nanoid(),
              subject: action.payload.olevel_one_7,
              grade: action.payload.grade_one_7,
            },
            subjectEight: {
              id: nanoid(),
              subject: action.payload.olevel_one_8,
              grade: action.payload.grade_one_8,
            },
            subjectNine: {
              id: nanoid(),
              subject: action.payload.olevel_one_9,
              grade: action.payload.grade_one_9,
            },
          },
        },
      };

    case "OLEVELS/SITTING_TWO":
      return {
        ...state,
        olevels: {
          ...state.olevels,
          sittingTwo: {
            ...state.olevels.sittingTwo,
            secondSittingexamType: action.payload.secondSittingexamType,
            secondSittingexamYear: action.payload.secondSittingexamYear,
            secondSittingexamNumber: action.payload.secondSittingexamNumber,
            secondSittingexam: action.payload.secondSittingexam,
            subjectOne: {
              id: nanoid(),
              subject: action.payload.olevel_two_1,
              grade: action.payload.grade_two_1,
            },
            subjectTwo: {
              id: nanoid(),
              subject: action.payload.olevel_two_2,
              grade: action.payload.grade_two_2,
            },
            subjectThree: {
              id: nanoid(),
              subject: action.payload.olevel_two_3,
              grade: action.payload.grade_two_3,
            },
            subjectFour: {
              id: nanoid(),
              subject: action.payload.olevel_two_4,
              grade: action.payload.grade_two_4,
            },
            subjectFive: {
              id: nanoid(),
              subject: action.payload.olevel_two_5,
              grade: action.payload.grade_two_5,
            },
            subjectSix: {
              id: nanoid(),
              subject: action.payload.olevel_two_6,
              grade: action.payload.grade_two_6,
            },
            subjectSeven: {
              id: nanoid(),
              subject: action.payload.olevel_two_7,
              grade: action.payload.grade_two_7,
            },
            subjectEight: {
              id: nanoid(),
              subject: action.payload.olevel_two_8,
              grade: action.payload.grade_two_8,
            },
            subjectNine: {
              id: nanoid(),
              subject: action.payload.olevel_two_9,
              grade: action.payload.grade_two_9,
            },
          },
        },
      };
    default:
      return state;
  }
};
