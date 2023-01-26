import { useContext, createContext, useState, useEffect } from "react";
import { getAllStudentsInfoDocs } from "../../services/firestore/students/students";

// create context
const studentDbContext = createContext();

// create provider
export const StudentDBProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      const students = await getAllStudentsInfoDocs();
      setStudents(students);
    };
    getStudents();
  }, []);

  return (
    <studentDbContext.Provider value={{ students }}>{children}</studentDbContext.Provider>
  );
};

// create custom hook
export const useStudentDB = () => {
  const context = useContext(studentDbContext);
  if (!context) {
    throw new Error("useStudentDB must be used within StudentDBProvider");
  }
  return context;
};
