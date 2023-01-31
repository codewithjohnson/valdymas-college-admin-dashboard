import { object, string, mixed } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const uploadSchema = object({
  selectFiles: string()
    .typeError("Document type is required")
    .oneOf(["passport", "olevel"], "Document type is required")
    .required("Document type is required"),

  attachment: mixed()
    .test("fileFormat", "Unsupported Format", (value) => {
      return value && ["image/jpeg", "image/jpg"].includes(value[0]?.type);
    })
    .test("fileSize", "File too large", (value) => {
      // test for 100kb
      return value && value[0]?.size <= 200000;
    })
    .typeError("File is required")
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
