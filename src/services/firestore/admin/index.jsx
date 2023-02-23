import { getValdymasCollectionRef } from "../students/students";
import {
  doc,
  setDoc,
  getDocs,
  addDoc,
  collection,
  deleteDoc,
  getDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

// administration collection ref
export const setadministrationDoc = async () => {
  const valdymasCollectionRef = getValdymasCollectionRef();
  return doc(valdymasCollectionRef, "administration");
};

// create administrator collection
export const setAdministratorsCollectionRef = async () => {
  const administrationDocRef = setadministrationDoc();
  return collection(administrationDocRef, "administrators");
};

// set admin doc
export const setAdminDoc = async (adminID) => {
  const administratorsCollectionRef = setAdministratorsCollectionRef();
  const adminDocRef = doc(administratorsCollectionRef, adminID);
  setDoc(adminDocRef, {
    createdAt: serverTimestamp(),
    role: "admin",
  });

  return adminDocRef.id;
};

// create info collection for admin
export const setAdminInfoCollectionRef = async (adminID) => {
  const administratorsCollectionRef = setAdministratorsCollectionRef();
  const adminDocRef = doc(administratorsCollectionRef, adminID);
  const adminInfoCollectionRef = collection(adminDocRef, "info");
  return adminInfoCollectionRef;
};

export const saveAdminToDB = async (adminID, data) => {
  const adminData = {
    name: data.name,
    email: data.email,
    photoURL: data.PhotoUrl,
    phoneNumber: data.phoneNumber,
    department: data.department,
    institutionalRole: data.institutionalRole,
    location: data.location,
  };

  const ID = setAdminDoc(adminID);
  const adminInfoCollectionRef = setAdminInfoCollectionRef(ID);
  const adminDocRef = doc(adminInfoCollectionRef, "adminInfo");
  await setDoc(adminDocRef, adminData);
};
