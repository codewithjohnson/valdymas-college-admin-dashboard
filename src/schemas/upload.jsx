import { object, string, number, boolean, date } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { mixed } from "yup/lib/locale";

export const uploadSchema = object({
  selectFiles: string()
    .typeError("Document type is required")
    .oneOf(["passport", "olevel"], "Document type is required")
    .required("Document type is required"),

  file: mixed()
    .typeError("File is required")
    .test("fileType", "File type is not supported", (value) => {
      return value && ["image/png", "image/jpeg"].includes(value[0].type);
    })
    .test("fileSize", "File size is too large", (value) => {
      return value && value[0].size <= 1000000;
    })
    .required("File is required"),
});

export const useUploadFormHooks = () => {
  const {
    register: uploadRegister,
    handleSubmit: uploadHandleSubmit,
    formState: uploadFormState,
    reset: uploadReset,
    formState: {
      errors: uploadErrors,
      isSubmitting: uploadIsSubmitting,
      isValid: uploadIsValid,
      isSubmitted: uploadIsSubmitted,
    },
  } = useForm({
    resolver: yupResolver(uploadSchema),
  });

  return {
    uploadRegister,
    uploadHandleSubmit,
    uploadFormState,
    uploadReset,
    uploadErrors,
    uploadIsSubmitting,
    uploadIsValid,
    uploadIsSubmitted,
  };
};
