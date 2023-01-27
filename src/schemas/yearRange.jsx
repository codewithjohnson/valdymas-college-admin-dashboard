import { object, string, number, boolean, date } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const YearRangeSchema = object({
  yearRange: string().required("Year range is required"),
});

export const useYearRangeFormHooks = () => {
  const {
    register: yearRangeRegister,
    watch: yearRangeWatch,
    reset: yearRangeReset,
    trigger: yearRangeTrigger,
    handleSubmit: yearRangeHandleSubmit,
    setValue: yearRangeSetValue,
    formState: { errors, isValid: yearRangeIsValid },
  } = useForm({
    resolver: yupResolver(YearRangeSchema),
  });

  return {
    yearRangeRegister,
    yearRangeWatch,
    yearRangeReset,
    yearRangeTrigger,
    yearRangeHandleSubmit,
    yearRangeSetValue,
    yearRangeIsValid,
    errors,
  };
};

// function that returns form values from the store into the form
export const SetFormValues = (setValue, DATA) => {
  setValue("setYearRange", DATA.setYearRange);
};
