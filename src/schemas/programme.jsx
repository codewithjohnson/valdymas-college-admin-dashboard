import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const programmeSchema = object({
  modeOfEntry: string().required("this is required"),
  department: string().required("this is required"),
  courseOfStudy: string().trim().min(3).required("this is required"),
  agent: string().trim().min(3).required("this is required"),
  subject1: string().required("this is required"),
  subject2: string().required("this is required"),
  subject3: string().required("this is required"),
});

// programme  form hook
export const useProgrammeFormHooks = () => {
  const {
    register,
    reset,
    trigger,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting, isValidating, isValid },
  } = useForm({
    resolver: yupResolver(programmeSchema),
  });

  return {
    register,
    reset,
    trigger,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    isValidating,
    isValid,
  };
};
