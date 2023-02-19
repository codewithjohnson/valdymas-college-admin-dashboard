import { useContext, createContext, useReducer, useEffect } from "react";
import { yearReducer } from "../reducers/yearReducer";

const initialState = {
  setYearRange: "2022-2023",
};

// create year context
export const YearContext = createContext();

// get stored year data from local storage
const getStoredYearData = () => {
  const storedYearData = localStorage.getItem("storedYearData");
  if (storedYearData) return JSON.parse(storedYearData);
  return initialState;
};

// create year context provider
export const YearContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(yearReducer, getStoredYearData());

  useEffect(() => {
    localStorage.setItem("storedYearData", JSON.stringify(state));
  }, [state]);

  return (
    <YearContext.Provider value={{ state, dispatch }}>
      {children}
    </YearContext.Provider>
  );
};

// custom hook to use year context
export const useYearContext = () => {
  return useContext(YearContext);
};
