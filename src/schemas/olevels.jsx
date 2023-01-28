import { object, string, number, boolean, date } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// first sitting subjects and grades
export const firstSittingSubjectsAndGrades = [
  "olevel_one_1",
  "olevel_one_2",
  "olevel_one_3",
  "olevel_one_4",
  "olevel_one_5",
  "olevel_one_6",
  "olevel_one_7",
  "olevel_one_8",
  "olevel_one_9",
  "grade_one_1",
  "grade_one_2",
  "grade_one_3",
  "grade_one_4",
  "grade_one_5",
  "grade_one_6",
  "grade_one_7",
  "grade_one_8",
  "grade_one_9",
];

// second sitting subjects and grades
export const secondSittingSubjectsAndGrades = [
  "olevel_two_1",
  "olevel_two_2",
  "olevel_two_3",
  "olevel_two_4",
  "olevel_two_5",
  "olevel_two_6",
  "olevel_two_7",
  "olevel_two_8",
  "olevel_two_9",
  "grade_two_1",
  "grade_two_2",
  "grade_two_3",
  "grade_two_4",
  "grade_two_5",
  "grade_two_6",
  "grade_two_7",
  "grade_two_8",
  "grade_two_9",
];

export const firstSittingSchema = object({
  firstSittingexamType: string().required("this is required"),
  firstSittingexamYear: string().required("this is required"),
  firstSittingexamNumber: string().trim().min(10).max(10).required("this is required"),
  firstSittingexam: string().required("this is required"),
  olevel_one_1: string().required("this is required"),
  olevel_one_2: string().required("this is required"),
  olevel_one_3: string().required("this is required"),
  olevel_one_4: string().required("this is required"),
  olevel_one_5: string().required("this is required"),
  olevel_one_6: string().required("this is required"),
  olevel_one_7: string().required("this is required"),
  olevel_one_8: string().required("this is required"),
  olevel_one_9: string().required("this is required"),
  grade_one_1: string().required("this is required"),
  grade_one_2: string().required("this is required"),
  grade_one_3: string().required("this is required"),
  grade_one_4: string().required("this is required"),
  grade_one_5: string().required("this is required"),
  grade_one_6: string().required("this is required"),
  grade_one_7: string().required("this is required"),
  grade_one_8: string().required("this is required"),
  grade_one_9: string().required("this is required"),
});

// first sitting form hooks
export const firstSittingFormHooks = () => {
  const {
    register: firstSittingRegister,
    reset: firstSittingReset,
    trigger: firstSittingTrigger,
    setValue: firstSittingSetValue,
    setError: firstSittingSetError,
    handleSubmit: firstSittingHandleSubmit,
    formState: {
      errors: firstSittingErrors,
      isSubmitting: firstSittingIsSubmitting,
      isValid: firstSittingIsValid,
      isValidating: firstSittingIsValidating,
    },
  } = useForm({
    resolver: yupResolver(firstSittingSchema),
  });

  return {
    firstSittingRegister,
    firstSittingReset,
    firstSittingTrigger,
    firstSittingSetValue,
    firstSittingSetError,
    firstSittingHandleSubmit,
    firstSittingErrors,
    firstSittingIsSubmitting,
    firstSittingIsValid,
    firstSittingIsValidating,
  };
};

// set first sitting form values
export const setFirstSittingFormValues = (setValue, data) => {
  setValue("firstSittingexamType", data.firstSittingexamType);
  setValue("firstSittingexamYear", data.firstSittingexamYear);
  setValue("firstSittingexamNumber", data.firstSittingexamNumber);
  setValue("firstSittingexam", data.firstSittingexam);
  setValue("olevel_one_1", data.subjectOne.subject);
  setValue("olevel_one_2", data.subjectTwo.subject);
  setValue("olevel_one_3", data.subjectThree.subject);
  setValue("olevel_one_4", data.subjectFour.subject);
  setValue("olevel_one_5", data.subjectFive.subject);
  setValue("olevel_one_6", data.subjectSix.subject);
  setValue("olevel_one_7", data.subjectSeven.subject);
  setValue("olevel_one_8", data.subjectEight.subject);
  setValue("olevel_one_9", data.subjectNine.subject);
  setValue("grade_one_1", data.subjectOne.grade);
  setValue("grade_one_2", data.subjectTwo.grade);
  setValue("grade_one_3", data.subjectThree.grade);
  setValue("grade_one_4", data.subjectFour.grade);
  setValue("grade_one_5", data.subjectFive.grade);
  setValue("grade_one_6", data.subjectSix.grade);
  setValue("grade_one_7", data.subjectSeven.grade);
  setValue("grade_one_8", data.subjectEight.grade);
  setValue("grade_one_9", data.subjectNine.grade);
};

export const secondSittingSchema = object({
  secondSittingexamType: string().required("this is required"),
  secondSittingexamYear: string().required("this is required"),
  secondSittingexamNumber: string()
    .min(5)
    .max(10, "exam number length cannot exceed 10")
    .required("this is required"),
  secondSittingexam: string().required("this is required"),
  olevel_two_1: string().required("this is required"),
  olevel_two_2: string().required("this is required"),
  olevel_two_3: string().required("this is required"),
  olevel_two_4: string().required("this is required"),
  olevel_two_5: string().required("this is required"),
  olevel_two_6: string().required("this is required"),
  olevel_two_7: string().required("this is required"),
  olevel_two_8: string().required("this is required"),
  olevel_two_9: string().required("this is required"),
  grade_two_1: string().required("this is required"),
  grade_two_2: string().required("this is required"),
  grade_two_3: string().required("this is required"),
  grade_two_4: string().required("this is required"),
  grade_two_5: string().required("this is required"),
  grade_two_6: string().required("this is required"),
  grade_two_7: string().required("this is required"),
  grade_two_8: string().required("this is required"),
  grade_two_9: string().required("this is required"),
});

// second sitting form hooks
export const secondSittingFormHooks = () => {
  const {
    register: secondSittingRegister,
    reset: secondSittingReset,
    trigger: secondSittingTrigger,
    setValue: secondSittingSetValue,
    setError: secondSittingSetError,
    handleSubmit: secondSittingHandleSubmit,
    formState: {
      errors: secondSittingErrors,
      isSubmitting: secondSittingIsSubmitting,
      isValid: secondSittingIsValid,
      isValidating: secondSittingIsValidating,
    },
  } = useForm({
    resolver: yupResolver(secondSittingSchema),
  });

  return {
    secondSittingRegister,
    secondSittingReset,
    secondSittingTrigger,
    secondSittingSetValue,
    secondSittingSetError,
    secondSittingHandleSubmit,
    secondSittingErrors,
    secondSittingIsSubmitting,
    secondSittingIsValid,
    secondSittingIsValidating,
  };
};

// set second sitting form values
export const setSecondSittingFormValues = (setValue, data) => {
  setValue("secondSittingexamType", data.secondSittingexamType);
  setValue("secondSittingexamYear", data.secondSittingexamYear);
  setValue("secondSittingexamNumber", data.secondSittingexamNumber);
  setValue("secondSittingexam", data.secondSittingexam);
  setValue("olevel_two_1", data.subjectOne.subject);
  setValue("olevel_two_2", data.subjectTwo.subject);
  setValue("olevel_two_3", data.subjectThree.subject);
  setValue("olevel_two_4", data.subjectFour.subject);
  setValue("olevel_two_5", data.subjectFive.subject);
  setValue("olevel_two_6", data.subjectSix.subject);
  setValue("olevel_two_7", data.subjectSeven.subject);
  setValue("olevel_two_8", data.subjectEight.subject);
  setValue("olevel_two_9", data.subjectNine.subject);
  setValue("grade_two_1", data.subjectOne.grade);
  setValue("grade_two_2", data.subjectTwo.grade);
  setValue("grade_two_3", data.subjectThree.grade);
  setValue("grade_two_4", data.subjectFour.grade);
  setValue("grade_two_5", data.subjectFive.grade);
  setValue("grade_two_6", data.subjectSix.grade);
  setValue("grade_two_7", data.subjectSeven.grade);
  setValue("grade_two_8", data.subjectEight.grade);
  setValue("grade_two_9", data.subjectNine.grade);
};
