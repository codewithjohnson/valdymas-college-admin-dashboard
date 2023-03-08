import React, { useEffect, useState } from "react";
import { changePasswordFormHooks } from "../../../schemas/changePassword";
import Spinner from "../../spinner/Spinner";
import { useAuth } from "../../../services/auth/auth";
import { updatePassword } from "firebase/auth";

const Password = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, HandleSignOut } = useAuth();

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
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
      await updatePassword(user, data.newPassword);
      alert("Password Changed Successfully");
      HandleSignOut();
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      alert(err.message);
    }
  };

  return (
    <div className="font-poppins">
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

      <div className="mt-10 border border-slate-200 h-full ">
        <header className="border-b border-b-slate-100 p-4">
          <p className="capitalize text-gray-900 text-sm">change password</p>
        </header>

        <form onSubmit={handleSubmit(onFormSubmit)} className="p-4 ">
          <div className="flex flex-col gap-5 sm:flex sm:flex-row">
            {/* current password */}
            <div className="password">
              <input
                name="currentPassword"
                id="currentPassword"
                placeholder="current password"
                type="text"
                {...register("currentPassword")}
                className="studentInputClass"
              />
              {errors?.currentPassword && (
                <p role="alert" className="errorMessage">
                  {errors?.currentPassword.message}
                </p>
              )}
            </div>

            {/* new password */}
            <div className="password">
              <input
                name="newPassword"
                id="newPassword"
                placeholder="new password"
                type="text"
                {...register("newPassword")}
                className="studentInputClass"
              />
              {errors?.newPassword && (
                <p role="alert" className="errorMessage">
                  {errors?.newPassword.message}
                </p>
              )}
            </div>

            {/* new password */}
            <div className="password">
              <input
                name="confirmNewPassword"
                id="confirmNewPassword"
                placeholder="confirm password"
                type="text"
                {...register("confirmNewPassword")}
                className="studentInputClass"
              />
              {errors?.confirmNewPassword && (
                <p role="alert" className="errorMessage">
                  {errors?.confirmNewPassword.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-full mt-8 flex justify-end items-center">
            <button
              disabled={isLoading}
              type="submit"
              className="bg-green-900 flex flex-row gap-2 items-center px-5 py-4 capitalize rounded-md text-white  cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out"
            >
              <Spinner isLoading={isLoading} override={override} size={20} />
              <span>change password</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Password;
