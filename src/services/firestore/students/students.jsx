import { getServices } from "../../firebase";

import {
  doc,
  setDoc,
  getDocs,
  addDoc,
  arrayUnion,
  collection,
  updateDoc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  QuerySnapshot,
} from "firebase/firestore";

const { firestore } = getServices();

// return a parent collection called "valdymas"
export const getValdymasCollectionRef = () => {
  return collection(firestore, "valdymas");
};

// set a doc in valdymas with year range as id
export const setValdymasDoc = async (yearRange) => {
  const valdymasCollectionRef = getValdymasCollectionRef();
  const valdymasDocRef = doc(valdymasCollectionRef, yearRange);
  await setDoc(valdymasDocRef, {
    yearRange,
    createdAt: serverTimestamp(),
  });
};

// return a collection called "students" inside year range doc
export const getStudentsCollectionRef = async (yearRange) => {
  const valdymasCollectionRef = getValdymasCollectionRef();
  const valdymasDocRef = doc(valdymasCollectionRef, yearRange);
  const studentsCollectionRef = collection(valdymasDocRef, "students");
  return studentsCollectionRef;
};

// create student doc with auto generated id and reference the student name
export const createStudentDoc = async (yearRange, studentName) => {
  const studentsCollectionRef = await getStudentsCollectionRef(yearRange);
  const studentDocRef = doc(studentsCollectionRef);
  await setDoc(studentDocRef, {
    studentName,
    createdAt: serverTimestamp(),
    role: "student",
  });
  return studentDocRef.id;
};

// create info collection for student
export const createStudentInfoCollection = async (yearRange, studentID) => {
  const studentsCollectionRef = await getStudentsCollectionRef(yearRange);
  const studentDocRef = doc(studentsCollectionRef, studentID);
  const studentInfoCollectionRef = collection(studentDocRef, "info");
  return studentInfoCollectionRef;
};

//  add student biodata, programme and olevels  to info collection
export const addStudentsData = async (yearRange, studentID, studentData) => {
  const studentInfoCollectionRef = await createStudentInfoCollection(
    yearRange,
    studentID
  );
  const { biodata, programme, olevels } = studentData;
  const biodataDocRef = doc(studentInfoCollectionRef, "biodata");
  const programmeDocRef = doc(studentInfoCollectionRef, "programme");
  const olevelsDocRef = doc(studentInfoCollectionRef, "olevels");
  await setDoc(biodataDocRef, biodata);
  await setDoc(programmeDocRef, programme);
  await setDoc(olevelsDocRef, olevels);
};

// get student biodata, programme and olevels docs from info collection for all students using real time listener
export const getStudentsData = async (yearRange) => {
  const studentsCollectionRef = await getStudentsCollectionRef(yearRange);
  const querySnapshot = await getDocs(studentsCollectionRef);
  // get info for all students in docs
  const studentsInfo = await Promise.all(
    querySnapshot.docs.map(async (studentDoc) => {
      const studentID = studentDoc.id;
      const studentInfoCollectionRef = await createStudentInfoCollection(
        yearRange,
        studentID
      );
      const studentInfoDocs = await getDocs(studentInfoCollectionRef);
      const studentInfo = studentInfoDocs.docs.map((doc) => {
        return { ...doc.data() };
      });
      return { studentID, studentInfo };
    })
  );
  return studentsInfo;
};

// create final student registration
export const createStudentRegistration = async (yearRange, studentName, studentData) => {
  setValdymasDoc(yearRange);
  getStudentsCollectionRef(yearRange);
  const studentID = await createStudentDoc(yearRange, studentName);
  createStudentInfoCollection(yearRange, studentID);
  await addStudentsData(yearRange, studentID, studentData);
};
