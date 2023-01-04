import { combineReducers } from "@reduxjs/toolkit";
import { biodataReducer } from "./students/biodataSlice";
import { OlevelsReducer } from "./students/olevelSlice";
import { programmeReducer } from "./students/programmeSlice";

export const rootReducer = combineReducers({
  biodata: biodataReducer,
  olevels: OlevelsReducer,
  programme: programmeReducer,
});
