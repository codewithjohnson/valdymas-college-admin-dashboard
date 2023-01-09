import { useEffect } from "react";
// import { getStudentsCollectionRef } from "./services/firestore/students/students";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";
import { nanoid } from "nanoid";

const initialState = {
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
  programme: {
    modeOfEntry: "",
    department: "",
    courseOfStudy: "",
    subject1: "",
    subject2: "",
    subject3: "",
  },
  olevels: {
    sittingOne: {
      GlobalsittingNumber: "",
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
      GlobalsittingNumber: "",
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

// get stored state from local storage
export const getStoredData = () => {
  const storedData = localStorage.getItem("storedData");
  return storedData ? JSON.parse(storedData) : initialState;
};

// create store
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: getStoredData(),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["BIODATA/ADDED"],
        ignoredActionPaths: ["payload.dateOfBirth"],
        ignoredPaths: ["biodata.dateOfBirth"],
      },
    }),
});

// store state to local storage
store.subscribe(() => {
  localStorage.setItem("storedData", JSON.stringify(store.getState()));
});
