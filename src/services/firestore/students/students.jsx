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
} from "firebase/firestore";

const { firestore } = getServices();

// return students collection ref
export const getStudentsCollectionRef = () => {
  return collection(firestore, "students");
};

// create a student doc with studentName as id inside students collection
export const createStudentDoc = async (studentName) => {
  const studentDocRef = doc(getStudentsCollectionRef(), studentName);

  // check if the name already exists
  const studentDoc = await getDoc(studentDocRef);
  if (studentDoc.exists()) {
    throw new Error("Student already exists");
  } else {
    await setDoc(studentDocRef, {
      studentName,
    });
  }
};

// add a collection inside student doc called "Infos"
export const createStudentInfoCollection = async (studentName) => {
  const getStudentDocRef = doc(getStudentsCollectionRef(), studentName);
  const createStudentInfoCollectionRef = collection(getStudentDocRef, "Infos");
  return createStudentInfoCollectionRef;
};

// add array of biodata, programme and olevels doc to the info collection
export const addStudentInfos = async (studentName, studentData) => {
  const getStudentInfoCollectionRef = await createStudentInfoCollection(studentName);
  const { biodata, programme, olevels } = studentData;
  const biodataDocRef = doc(getStudentInfoCollectionRef, "biodata");
  const programmeDocRef = doc(getStudentInfoCollectionRef, "programme");
  const olevelsDocRef = doc(getStudentInfoCollectionRef, "olevels");
  await setDoc(biodataDocRef, biodata);
  await setDoc(programmeDocRef, programme);
  await setDoc(olevelsDocRef, olevels);
};

// create final student registration
export const registerStudent = async (studentName, studentData) => {
  await createStudentDoc(studentName);
  await createStudentInfoCollection(studentName);
  await addStudentInfos(studentName, studentData);
};
