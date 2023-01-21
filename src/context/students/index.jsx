import { useContext, createContext, useReducer, useEffect } from "react";
import { studentReducer } from "../../reducers/students/studentReducer";
import { initialState } from "../../utilities/store";

// create student context
export const StudentContext = createContext();

// get stored student data from local storage
const getStoredStudentData = () => {
  const storedStudentData = localStorage.getItem("storedStudentData");
  if (storedStudentData) return JSON.parse(storedStudentData);
  return initialState;
};

// create student context provider
export const StudentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, getStoredStudentData());

  useEffect(() => {
    localStorage.setItem("storedStudentData", JSON.stringify(state));
  }, [state]);

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};

// custom hook to use student context
export const useStudentContext = () => {
  return useContext(StudentContext);
};
