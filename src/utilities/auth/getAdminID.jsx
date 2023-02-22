import axios from "axios";

export const getAdminAuthID = async (data) => {
  const newAdminAuth = {
    displayName: data.name,
    email: data.email,
    photoURL: data.PhotoUrl,
    phoneNumber: data.phoneNumber,
    password: "Valdymas2016",
  };

  try {
    const res = await axios.post(
      "http://localhost:3000/api/admins/new",
      newAdminAuth
    );
    return res.data;
  } catch (err) {
    return err.message;
  }
};
