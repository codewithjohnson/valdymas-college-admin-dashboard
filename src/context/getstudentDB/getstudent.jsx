import { createContext, useContext, useState, useEffect } from "react";
import { getDocs, onSnapshot } from "firebase/firestore";
import { useYearContext } from "../setYears/setYears";
import {
  createStudentInfoCollection,
  getStudentsCollectionRef,
} from "../../services/firestore/students/students";

// create student from db context
export const StudentFromDBContext = createContext();

// create student from db context provider
export const StudentFromDBContextProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const { state: yearState } = useYearContext();
  const { setYearRange: currentYear } = yearState;

  // get students data from firestore and set it to state on mount and on refresh
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
