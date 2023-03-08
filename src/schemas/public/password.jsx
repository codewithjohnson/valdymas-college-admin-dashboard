// import { object, string, number, boolean, date } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const changePasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .typeError()
    .trim()
    .required("Last name is required"),
  confirmNewPassword: Yup.string()
    .typeError()
    .trim()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.newPassword === value;
    }),
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
