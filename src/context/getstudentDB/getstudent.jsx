import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { getDocs, onSnapshot } from "firebase/firestore";
import { useYearContext } from "../setYears/setYears";
import {
  createStudentInfoCollection,
  getStudentsCollectionRef,
} from "../../services/firestore/students/students";

export const StudentFromDBContext = createContext();

export const StudentFromDBContextProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  // console.log("students from db");

  const { state: yearState } = useYearContext();
  const { setYearRange: currentYear } = yearState;

  const getStudentsDataListener = async () => {
    const studentsCollectionRef = await getStudentsCollectionRef(currentYear);
    const unsubscribe = onSnapshot(
      studentsCollectionRef,
      async (querySnapshot) => {
        const studentsInfo = await Promise.all(
          querySnapshot.docs.map(async (studentDoc) => {
            const studentID = studentDoc.id;
            const studentInfoCollectionRef = await createStudentInfoCollection(
              currentYear,
              studentID
            );
            const studentInfoDocs = await getDocs(studentInfoCollectionRef);
            const studentInfo = studentInfoDocs.docs.map((doc) => {
              return { ...doc.data() };
            });
            return { studentID, studentInfo };
          })
        );
        setStudents(studentsInfo);
      }
    );
    return unsubscribe;
  };

  useEffect(() => {
    getStudentsDataListener();
  }, []);

  return (
    <StudentFromDBContext.Provider value={{ students }}>
      {children}
    </StudentFromDBContext.Provider>
  );
};

// custom hook to use student from db context
export const useStudentFromDBContext = () => {
  return useContext(StudentFromDBContext);
};
