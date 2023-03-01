import { initializeApp, getApps } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { firebaseConfig } from "./firebase.config";

export const initializeServices = () => {
  const isConfigured = getApps().length > 0;
  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const storage = getStorage(firebaseApp);
  return { firestore, auth, storage, isConfigured };
};

export const connectToEmulators = ({ auth, firestore, storage }) => {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(firestore, "localhost", 8080);
};

export const getServices = () => {
  const services = initializeServices();

  // if (!services.isConfigured) {
  //   connectToEmulators(services);
  // }
  // if (process.env.NODE_ENV === "development") {
  //   console.log("Firebase services initialized in development mode");
  // }

  const { firestore, auth, storage } = services;
  return { firestore, auth, storage };
};
