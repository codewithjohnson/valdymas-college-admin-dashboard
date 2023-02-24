import { useEffect, useState } from "react";
import { getDocs, onSnapshot } from "firebase/firestore";
import {
  createStudentInfoCollection,
  getStudentsCollectionRef,
} from "../services/firestore/students/students";

import { useYearContext } from "../context/setYears/setYears";

export const useStudentsData = () => {
  const [students, setStudents] = useState([]);
  
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

  return { students };
};
