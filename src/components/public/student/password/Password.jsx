import React, { useEffect, useState } from "react";
import { changePasswordFormHooks } from "../../../../schemas/public/password";
import Spinner from "../../../spinner/Spinner";

const Password = () => {
  const [isLoading, setIsLoading] = useState(false);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "black",
  };

  const {
    register,
    reset,
    handleSubmit,
    errors,
    isValid,
    isSubmitted,
    isSubmitSuccessful,
  } = changePasswordFormHooks();

  useEffect(() => {
    isSubmitSuccessful && isSubmitted && !isLoading && reset();
  }, [isLoading, isSubmitSuccessful, isSubmitted]);

  const onFormSubmit = async (data) => {
    try {
      setIsLoading(true);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <div>
      <header className="flex items-center justify-start gap-5  border border-dashed border-red-400 p-3">
        <span className="material-symbols-outlined text-red-500">warning</span>
        <div className="flex flex-col justify-between items-center ">
          <span className=" w-full text-start">Alert !</span>
          <p className="text-gray-600 text-[13px] sm:text-base">
            Your Password must be safe. So change it periodically.{" "}
            <span className="text-gray-900 font-bold">
              Do not share your password
            </span>
          </p>
        </div>
      </header>
    </div>
  );
};

export default Password;
