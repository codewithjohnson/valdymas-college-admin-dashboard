import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";

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
  programme: {},
  olevels: {},
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
});

// store state to local storage
store.subscribe(() => {
  localStorage.setItem("storedData", JSON.stringify(store.getState()));
});
