import { combineReducers } from "@reduxjs/toolkit";
import { biodataReducer } from "../reducers/students/biodataSlice";

export const rootReducer = combineReducers({
  biodata: biodataReducer,
});
