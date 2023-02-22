import { object, string, number, boolean, date } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// new admin schema
export const newAdminSchema = object({
  name: string().typeError().trim().min(3).required("Name is required"),
  email: string().email().required("Email is required"),
  phoneNumber: string()
    .matches(/^(0|\+234)[789][01]\d{8}$/, "Invalid phone number")
    .required("Phone number is required"),
  department: string().min(3).required("Department is required"),
  institutionalRole: string().min(3).required("Role is required"),
  location: string().min(3).required("Location is required"),
});

// new admin form hooks
export const useNewAdminFormHooks = () => {
  const {
    register: newAdminRegister,
    watch: newAdminWatch,
    reset: newAdminReset,
    trigger: newAdminTrigger,
    handleSubmit: newAdminHandleSubmit,
    setValue: newAdminSetValue,
    formState: {
      errors,
      isValid: newAdminIsValid,
      isSubmitted: newAdminIsSubmitted,
      isSubmitting: newAdminIsSubmitting,
      isSubmitSuccessful: newAdminIsSubmitSuccessful,
    },
  } = useForm({
    resolver: yupResolver(newAdminSchema),
  });
  return {
    newAdminRegister,
    newAdminWatch,
    newAdminReset,
    newAdminTrigger,
    newAdminHandleSubmit,
    newAdminSetValue,
    errors,
    newAdminIsValid,
    newAdminIsSubmitted,
    newAdminIsSubmitting,
    newAdminIsSubmitSuccessful,
  };
};

// function that returns form values from the store into the form
export const SetNewAdminFormValues = (setValue, DATA) => {
  setValue("name", DATA.name);
  setValue("email", DATA.email);
  setValue("phoneNumber", DATA.phoneNumber);
  setValue("department", DATA.department);
  setValue("role", DATA.institutionalRole);
  setValue("location", DATA.location);
};
