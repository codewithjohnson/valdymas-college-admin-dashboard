import { collection, doc, onSnapshot } from "firebase/firestore";
import { getValdymasCollectionRef } from "../services/firestore/students/students";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useGetStudentById = (docRef) => {
  const [ward, setWard] = useState({});
  const { studentID } = useParams();
  const yearRange = "2022-2023";

  useEffect(() => {
    const getStudentDocListener = async () => {
      const valdymasCollectionRef = getValdymasCollectionRef();

      // get the year range doc
      const valdymasDocRef = doc(valdymasCollectionRef, yearRange);

      // get the students collection ref
      const studentsCollectionRef = collection(valdymasDocRef, "students");

      // get the student doc ref
      const studentDocRef = doc(studentsCollectionRef, studentID);

      // get the student info collection ref
      const studentInfoCollectionRef = collection(studentDocRef, "info");

      // get biodata doc ref
      const biodataDocRef = doc(studentInfoCollectionRef, "biodata");
      const dataCaptureDocRef = doc(studentInfoCollectionRef, "dataCapture");
      const olevelsDocRef = doc(studentInfoCollectionRef, "olevels");
      const programmeDocRef = doc(studentInfoCollectionRef, "programme");

      // send doc based on passed docRef  using switch statement
      switch (docRef) {
        case "biodata":
          const unsubscribe = onSnapshot(biodataDocRef, (doc) => {
            const biodata = doc.data();
            setWard(biodata);
          });
          return unsubscribe;
        case "dataCapture":
          const unsubscribe2 = onSnapshot(dataCaptureDocRef, (doc) => {
            const dataCapture = doc.data();
            setWard(dataCapture);
          });
          return unsubscribe2;
        case "olevels":
          const unsubscribe3 = onSnapshot(olevelsDocRef, (doc) => {
            const olevels = doc.data();
            setWard(olevels);
          });
          return unsubscribe3;
        case "programme":
          const unsubscribe4 = onSnapshot(programmeDocRef, (doc) => {
            const programme = doc.data();
            setWard(programme);
          });

          return unsubscribe4;
        default:
          const unsubscribe5 = onSnapshot(
            studentInfoCollectionRef,
            (querySnapshot) => {
              const studentInfo = querySnapshot.docs.map((doc) => {
                return { ...doc.data() };
              });
              setWard(studentInfo);
            }
          );
          return unsubscribe5;
      }
    };

    getStudentDocListener();
  }, []);

  return { ward };
};
