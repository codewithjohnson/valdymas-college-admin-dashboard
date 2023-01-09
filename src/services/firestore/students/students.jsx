import { getServices } from "../../firebase";
import { nanoid } from "nanoid";
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

// return students collection ref
export const getStudentsCollectionRef = () => {
  return collection(firestore, "students");
};

// create student doc with auto generated id and reference the student name
export const createStudentDoc = async (studentName) => {
  const studentDocRef = doc(getStudentsCollectionRef());
  await setDoc(studentDocRef, {
    studentName,
    createdAt: serverTimestamp(),
    role: "student",
  });
  return studentDocRef.id;
};

// create info collection for student
export const createStudentInfoCollection = async (studentID) => {
  const studentsCollectionRef = getStudentsCollectionRef();
  const studentDocRef = doc(studentsCollectionRef, studentID);
  const studentInfoCollectionRef = collection(studentDocRef, "info");
  return studentInfoCollectionRef;
};

//  add student biodata, programme and olevels  to info collection
export const addStudentsData = async (studentID, studentData) => {
  const studentInfoCollectionRef = await createStudentInfoCollection(studentID);
  const { biodata, programme, olevels } = studentData;
  const biodataDocRef = doc(studentInfoCollectionRef, "biodata");
  const programmeDocRef = doc(studentInfoCollectionRef, "programme");
  const olevelsDocRef = doc(studentInfoCollectionRef, "olevels");
  await setDoc(biodataDocRef, biodata);
  await setDoc(programmeDocRef, programme);
  await setDoc(olevelsDocRef, olevels);
};

// get student biodata, programme and olevels docs from info collection for all students
export const getAllStudentsInfoDocs = async () => {
  const studentsCollectionRef = getStudentsCollectionRef();
  const studentsInfoDocs = await getDocs(studentsCollectionRef);
  // get info for all students in docs
  const studentsInfo = await Promise.all(
    studentsInfoDocs.docs.map(async (studentDoc) => {
      const studentID = studentDoc.id;
      const studentInfoCollectionRef = await createStudentInfoCollection(studentID);
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
export const registerStudent = async (studentName, studentData) => {
  const studentID = await createStudentDoc(studentName);
  await createStudentInfoCollection(studentID);
  await addStudentsData(studentID, studentData);
};
