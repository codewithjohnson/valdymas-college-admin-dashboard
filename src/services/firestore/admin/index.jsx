import { getServices } from "../../firebase";
import { getValdymasCollectionRef } from "../students/students";
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
} from "firebase/firestore";

const { firestore } = getServices();
