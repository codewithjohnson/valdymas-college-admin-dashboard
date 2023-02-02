import { getServices } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";
const { storage } = getServices();
const BUCKET_URL = "gs://valdymas-admin-dashboard.appspot.com/";

export const uploadStudentFiles = async (
  files,
  yearRange,
  studentID,
  studentFullName
) => {
  const mainPath = `${BUCKET_URL}/Valdymas/${yearRange}/students/${studentID}}`;
  const storageRef = ref(storage, mainPath);

  const convertBase64ToBlob = (base64, type) => {
    const block = base64.split(";");
    const contentType = block[0].split(":")[1];
    const realData = block[1].split(",")[1];
    const blob = new Blob([realData], { type: contentType });
    return blob;
  };

  // extract files from object
  const passport = files?.passport?.data;
  const passportBlob = convertBase64ToBlob(passport, "image/jpeg");
  await uploadBytes(storageRef, passportBlob);

  const olevel = files?.olevelResult?.data;
  const olevelBlob = convertBase64ToBlob(olevel, "image/jpeg");
};
