import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const initFirebase = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  return { auth, db, storage };
};

// connect to emulator in development mode
const connectToEmulator = async (auth, db, storage) => {
  if (process.env.NODE_ENV === "development") {
    const authUrl = "http://localhost:9099";
    await fetch(authUrl);
    connectAuthEmulator(auth, "http://localhost:9099", {
      disableWarnings: true,
    });
    connectFirestoreEmulator(db, "localhost", 8080);
    console.log("Connected to Firebase Emulator");
  }
};

// get all services after connecting to emulator
export const getServices = () => {
  const services = initFirebase();
  connectToEmulator(services.auth, services.db, services.storage);
  const { auth, db, storage } = services;
  return { auth, db, storage };
};
