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

// get a doc from valdymas with year range as id
export const getValdymasDoc = async (yearRange) => {
  const valdymasCollectionRef = getValdymasCollectionRef();
  const valdymasDocRef = doc(valdymasCollectionRef, yearRange);
  const valdymasDoc = await getDoc(valdymasDocRef);
  return valdymasDoc.data();
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

// check if a student exists
const checkStudentExists = async (yearRange, studentID) => {
  const studentsCollectionRef = await getStudentsCollectionRef(yearRange);
  const studentDocRef = doc(studentsCollectionRef, studentID);
  const studentDoc = await getDoc(studentDocRef);
  return studentDoc.exists();
};

// check if a user has the role of student
const checkStudentRole = async (yearRange, studentID) => {
  const studentsCollectionRef = await getStudentsCollectionRef(yearRange);
  const studentDocRef = doc(studentsCollectionRef, studentID);
  const studentDoc = await getDoc(studentDocRef);
  const studentRole = studentDoc.data().role;
  return studentRole === "student";
};

// create info collection for student
export const createStudentInfoCollection = async (yearRange, studentID) => {
  const studentsCollectionRef = await getStudentsCollectionRef(yearRange);
  const studentDocRef = doc(studentsCollectionRef, studentID);
  const studentInfoCollectionRef = collection(studentDocRef, "info");
  return studentInfoCollectionRef;
};

// get the number of students registered
export const getNumberOfStudents = async (yearRange) => {
  const studentsCollectionRef = await getStudentsCollectionRef(yearRange);
  const querySnapshot = await getDocs(studentsCollectionRef);
  return querySnapshot.size;
};

// extract the last 2 digits of the year from the above year range
const getyearRangeLastSubstring = (yearRange) => {
  const yearRangeArray = yearRange.split("-");
  const yearRangeLast = yearRangeArray[1];
  const yearRangeLastSubstring = yearRangeLast.substring(2, 4);
  return yearRangeLastSubstring;
};

//  add student biodata, programme and olevels  to info collection
export const addStudentsData = async (yearRange, studentID, studentData) => {
  const studentInfoCollectionRef = await createStudentInfoCollection(
    yearRange,
    studentID
  );
  const { setYearRange, biodata, dataCapture, programme, olevels } = studentData;

  // get the last 2 digits of the year from the above year range
  const yearRangeLastSubstring = getyearRangeLastSubstring(setYearRange);

  // get department  from programme and extract the first 3 characters
  const { department } = programme;
  const departmentCode = department.substring(0, 3);

  // get length of students registered
  const numberOfStudents = await getNumberOfStudents(setYearRange);

  // create student school ID
  const studentSchoolID = `VAL/${yearRangeLastSubstring}/${departmentCode}/${numberOfStudents}`;

  const biodataDocRef = doc(studentInfoCollectionRef, "biodata");
  const dataCaptureDocRef = doc(studentInfoCollectionRef, "dataCapture");
  const programmeDocRef = doc(studentInfoCollectionRef, "programme");
  const olevelsDocRef = doc(studentInfoCollectionRef, "olevels");
  const studentSchoolIDDocRef = doc(studentInfoCollectionRef, "studentSchoolID");
  await setDoc(biodataDocRef, biodata);
  await setDoc(dataCaptureDocRef, dataCapture);
  await setDoc(programmeDocRef, programme);
  await setDoc(olevelsDocRef, olevels);
  await setDoc(studentSchoolIDDocRef, { studentSchoolID });
};

// find a student using authID passed from firebase auth and return student ID
export const findStudent = async (yearRange, authID) => {
  const studentsCollectionRef = await getStudentsCollectionRef(yearRange);
  const querySnapshot = await getDocs(studentsCollectionRef);
  const studentDoc = querySnapshot.docs.find((doc) => {
    return doc.data().authID === authID;
  });
  return studentDoc.id;
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

// get a collection called "admins" inside year range doc
export const getAdminsCollectionRef = async (yearRange) => {
  const valdymasCollectionRef = getValdymasCollectionRef();
  const valdymasDocRef = doc(valdymasCollectionRef, yearRange);
  const adminsCollectionRef = collection(valdymasDocRef, "admins");
  return adminsCollectionRef;
};

// check if an admin exists using admin id
export const checkAdminExists = async (yearRange, adminID) => {
  const adminsCollectionRef = await getAdminsCollectionRef(yearRange);
  const adminDocRef = doc(adminsCollectionRef, adminID);
  const adminDoc = await getDoc(adminDocRef);
  return adminDoc.exists();
};

// check the role of the admin using admin id
export const checkAdminRole = async (yearRange, adminID) => {
  const adminsCollectionRef = await getAdminsCollectionRef(yearRange);
  const adminDocRef = doc(adminsCollectionRef, adminID);
  const adminDoc = await getDoc(adminDocRef);
  return adminDoc.data().role;
};
