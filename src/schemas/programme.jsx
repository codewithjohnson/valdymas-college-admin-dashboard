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
    setValue,
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
    setValue,
    trigger,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    isValidating,
    isValid,
  };
};

export const SetFormValues = (setValue, DATA) => {
  setValue("modeOfEntry", DATA.modeOfEntry);
  setValue("department", DATA.department);
  setValue("courseOfStudy", DATA.courseOfStudy);
  setValue("agent", DATA.agent);
  setValue("subject1", DATA.subject1);
  setValue("subject2", DATA.subject2);
  setValue("subject3", DATA.subject3);
};
