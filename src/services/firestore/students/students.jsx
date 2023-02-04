import { getServices } from "../../firebase";

import {
  doc,
  setDoc,
  getDocs,
  addDoc,
  arrayUnion,
  collection,
  updateDoc,
  deleteDoc,
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
export const createStudentDoc = async (yearRange, studentFullName) => {
  const studentsCollectionRef = await getStudentsCollectionRef(yearRange);
  const studentDocRef = doc(studentsCollectionRef);
  await setDoc(studentDocRef, {
    studentFullName,
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
  const { biodata, dataCapture, programme, olevels } = studentData;
  const biodataDocRef = doc(studentInfoCollectionRef, "biodata");
  const dataCaptureDocRef = doc(studentInfoCollectionRef, "dataCapture");
  const programmeDocRef = doc(studentInfoCollectionRef, "programme");
  const olevelsDocRef = doc(studentInfoCollectionRef, "olevels");
  await setDoc(biodataDocRef, biodata);
  await setDoc(dataCaptureDocRef, dataCapture);
  await setDoc(programmeDocRef, programme);
  await setDoc(olevelsDocRef, olevels);
};

// get student docs: biodata,dataCapture, programme and olevels using student id
export const getStudentDoc = async (yearRange, studentID) => {
  const studentInfoCollectionRef = await createStudentInfoCollection(
    yearRange,
    studentID
  );
  const studentInfoDocs = await getDocs(studentInfoCollectionRef);
  const studentInfo = studentInfoDocs.docs.map((doc) => {
    return { ...doc.data() };
  });
  return studentInfo;
};

// rewrite getStudentsData function to use real time listener
export const getStudentsDataListener = async (yearRange, setStudentData) => {
  const studentsCollectionRef = await getStudentsCollectionRef(yearRange);
  const unsubscribe = onSnapshot(studentsCollectionRef, async (querySnapshot) => {
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
    setStudentData(studentsInfo);
  });
  return unsubscribe;
};

// delete student doc using student id
export const deleteStudentDoc = async (yearRange, studentID) => {
  const studentsCollectionRef = await getStudentsCollectionRef(yearRange);
  const studentDocRef = doc(studentsCollectionRef, studentID);
  await deleteDoc(studentDocRef);
};

// create final student registration
export const createStudentRegistration = async (yearRange, studentID, studentData) => {
  setValdymasDoc(yearRange);
  getStudentsCollectionRef(yearRange);
  createStudentInfoCollection(yearRange, studentID);
  await addStudentsData(yearRange, studentID, studentData);
};
