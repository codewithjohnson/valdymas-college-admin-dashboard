import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

export const loginSchema = object({
  level: string()
    .typeError("")
    .oneOf(["admin", "student"], "select a correct level")
    .required("Level is required"),
  email: string()
    .email()
    .typeError("")
    .trim()
    .required("Email is required")
    .email("Email is invalid"),
  password: string()
    .trim()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export const useLoginFormHooks = () => {
  const {
    register: loginRegister,
    watch: loginWatch,
    reset: loginReset,
    trigger: loginTrigger,
    handleSubmit: loginHandleSubmit,
    setValue: loginSetValue,
    formState: { errors: loginErrors, isValid: loginIsValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return {
    loginRegister,
    loginWatch,
    loginReset,
    loginTrigger,
    loginHandleSubmit,
    loginSetValue,
    loginErrors,
    loginIsValid,
  };
};
