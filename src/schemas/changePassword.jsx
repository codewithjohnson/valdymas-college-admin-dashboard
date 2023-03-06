import { object, string, number, boolean, date } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const changePasswordSchema = object({
  currentPassword: string()
    .typeError()
    .trim()
    .required("First name is required"),

  newPassword: string().typeError().trim().required("Last name is required"),
  confirmNewPassword: string().typeError().trim().required("Email is required"),
});

// change password form hooks
export const changePasswordFormHooks = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid, isSubmitted, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  return {
    register,
    reset,
    handleSubmit,
    errors,
    isValid,
    isSubmitted,
    isSubmitSuccessful,
  };
};
