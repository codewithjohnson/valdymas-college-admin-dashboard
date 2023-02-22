import { getServices } from "../../firebase";

import {
  doc,
  setDoc,
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
  getDoc,
  onSnapshot,
  serverTimestamp,
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

// create student doc with studentID as id

export const createStudentDoc = async (
  yearRange,
  studentID,
  studentFullName
) => {
  const studentsCollectionRef = await getStudentsCollectionRef(yearRange);
  const studentDocRef = doc(studentsCollectionRef, studentID);
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

// get the number of students registered
export const getNumberOfStudents = async (yearRange) => {
  const studentsCollectionRef = await getStudentsCollectionRef(yearRange);
  const querySnapshot = await getDocs(studentsCollectionRef);
  return querySnapshot.size;
};

// extract the last 2 digits of the year from the above year range
export const getyearRangeLastSubstring = (yearRange) => {
  const yearRangeArray = yearRange.split("-");
  const yearRangeLast = yearRangeArray[1];
  const yearRangeLastSubstring = yearRangeLast.substring(2, 4);
  return yearRangeLastSubstring;
};

// add two 0 or one 0 if the number of students is less than 10 or less than 100 to the function above
export const transformNumberOfStudents = (numberOfStudents) => {
  if (numberOfStudents < 10) {
    return `00${numberOfStudents}`;
  } else if (numberOfStudents < 100) {
    return `0${numberOfStudents}`;
  } else {
    return numberOfStudents;
  }
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
  const studentIDDocRef = doc(studentInfoCollectionRef, "studentID");
  await setDoc(biodataDocRef, biodata);
  await setDoc(dataCaptureDocRef, dataCapture);
  await setDoc(programmeDocRef, programme);
  await setDoc(olevelsDocRef, olevels);
  await setDoc(studentIDDocRef, { studentID });
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
  const unsubscribe = onSnapshot(
    studentsCollectionRef,
    async (querySnapshot) => {
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
    }
  );
  return unsubscribe;
};

// delete student doc using student id
export const deleteStudentDoc = async (yearRange, studentID) => {
  const studentsCollectionRef = await getStudentsCollectionRef(yearRange);
  const studentDocRef = doc(studentsCollectionRef, studentID);
  await deleteDoc(studentDocRef);
};

// ==================================== STUDENT REGISTRATION ====================================

export const createStudentRegistration = async (
  yearRange,
  studentID,
  studentData
) => {
  setValdymasDoc(yearRange);
  getStudentsCollectionRef(yearRange);
  createStudentInfoCollection(yearRange, studentID);
  await addStudentsData(yearRange, studentID, studentData);
};

//================================================== ADMIN REGISTRATION ================================================

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

// ====================================== UPDATE STUDENT DATA ======================================

// update biodata of student
export const updateStudentBiodata = async (yearRange, studentID, biodata) => {
  const studentInfoCollectionRef = await createStudentInfoCollection(
    yearRange,
    studentID
  );
  const biodataDocRef = doc(studentInfoCollectionRef, "biodata");
  await updateDoc(biodataDocRef, biodata);
};

// update data capture of student
export const updateStudentDataCapture = async (
  yearRange,
  studentID,
  dataCapture
) => {
  const studentInfoCollectionRef = await createStudentInfoCollection(
    yearRange,
    studentID
  );
  const dataCaptureDocRef = doc(studentInfoCollectionRef, "dataCapture");
  await updateDoc(dataCaptureDocRef, dataCapture);
};

// update programme of student
export const updateStudentProgramme = async (
  yearRange,
  studentID,
  programme
) => {
  const studentInfoCollectionRef = await createStudentInfoCollection(
    yearRange,
    studentID
  );
  const programmeDocRef = doc(studentInfoCollectionRef, "programme");
  await updateDoc(programmeDocRef, programme);
};

// update olevels of student
export const updateStudentOlevels = async (yearRange, studentID, olevels) => {
  const studentInfoCollectionRef = await createStudentInfoCollection(
    yearRange,
    studentID
  );
  const olevelsDocRef = doc(studentInfoCollectionRef, "olevels");
  await updateDoc(olevelsDocRef, olevels);
};
