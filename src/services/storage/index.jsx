import { getServices } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";
const { storage } = getServices();
const BUCKET_URL = "gs://valdymas-1c0a6.appspot.com";

export const uploadStudentFiles = async (
  files,
  yearRange,
  studentID,
  studentFullName
) => {
  const mainPath = `${BUCKET_URL}/Valdymas/${yearRange}/students/${studentID}/${studentFullName}}`;
  const storageRef = ref(storage, mainPath);

  // extract files from object
  const passport = files?.passport?.data;
  const passBlob = new Blob([passport], { type: "image/jpeg" });

  const olevel = files?.olevelResult?.data;

  // upload passport
  const passportRef = ref(storageRef, "passport");
  await uploadBytes(passportRef, passBlob);
};
