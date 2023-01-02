import { combineReducers } from "@reduxjs/toolkit";
import { biodataReducer } from "./students/biodataSlice";
import { OlevelsReducer } from "./students/olevelSlice";

export const rootReducer = combineReducers({
  biodata: biodataReducer,
  olevels: OlevelsReducer,
});
