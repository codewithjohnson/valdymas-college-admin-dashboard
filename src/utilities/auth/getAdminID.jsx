import axios from "axios";

export const getAdminAuthID = async (data) => {
  // transform the photoURL to a public URL
  const transformPhotoUrl = (photoURL) => {
    const fileID = photoURL.match(/[-\w]{25,}/); 
    if (!fileID) {
      throw new Error("Invalid photo URL");
    }
    const publicURL = `https://drive.google.com/uc?id=${fileID}`;
    return publicURL;
  };

  // create a new admin object
  const newAdminAuth = {
    displayName: data.name,
    email: data.email,
    photoURL: transformPhotoUrl(data.PhotoUrl),
    phoneNumber: data.phoneNumber,
    password: "Valdymas2016",
  };

  try {
    const res = await axios.post(
      "https://us-central1-valdymas-admin-dashboard-8ef0d.cloudfunctions.net/app/api/admins/new",
      newAdminAuth
    );
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else if (error.request) {
      throw new Error(error.request);
    } else {
      throw new Error(error);
    }
  }
};
