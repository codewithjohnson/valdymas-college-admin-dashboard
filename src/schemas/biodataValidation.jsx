import { object, string, number, boolean, date } from "yup";
import { nigeriaStates } from "../utilities/nigeria";

export const biodataSchema = object({
  firstname: string().required("First name is required"),
  lastname: string().required("Last name is required"),
  middlename: string().required("Middle name is required"),
  email: string().email().required("Email is required"),
  phoneNumber: string()
    .matches(/^(0|\+234)[789][01]\d{8}$/, "Invalid phone number")
    .required("Phone number is required"),
  gender: string().required("Gender is required"),
  dateOfBirth: date().max(new Date()).required("Date of birth is required"),
  contactAddress: string().required("Address is required"),
  religion: string().required("Religion is required"),
  nationality: string().required("Nationality is required"),
  maritalStatus: string().required("Marital status is required"),
  stateOfOrigin: string()
    .required("State is required")
    .oneOf(nigeriaStates, "state of origin is required"),
  lga: string().required("LGA is required"),
});

// function that returns form values from the store into the form
export const SetFormValues = (setValue, DATA) => {
  setValue("firstname", DATA.firstname);
  setValue("lastname", DATA.lastname);
  setValue("middlename", DATA.middlename);
  setValue("email", DATA.email);
  setValue("phoneNumber", DATA.phoneNumber);
  setValue("gender", DATA.gender);
  setValue("dateOfBirth", DATA.dateOfBirth);
  setValue("contactAddress", DATA.contactAddress);
  setValue("religion", DATA.religion);
  setValue("nationality", DATA.nationality);
  setValue("maritalStatus", DATA.maritalStatus);
  setValue("stateOfOrigin", DATA.stateOfOrigin);
  setValue("lga", DATA.lga);
};
