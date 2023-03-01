import { getValdymasCollectionRef } from "../students/students";
import {
  doc,
  setDoc,
  getDocs,
  collection,
  deleteDoc,
  getDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

export const saveAdmin = async (adminID, adminData) => {
  const valdymasCollectionRef = getValdymasCollectionRef();
  const administrationDocRef = doc(valdymasCollectionRef, "administration");
  const administratorsCollectionRef = collection(
    administrationDocRef,
    "administrators"
  );
  const adminDocRef = doc(administratorsCollectionRef, adminID);
  setDoc(adminDocRef, adminData);
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

  saveAdmin(adminID, adminData);
};
