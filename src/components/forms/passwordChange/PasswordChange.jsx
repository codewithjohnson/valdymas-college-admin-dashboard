import React from "react";

const Password = () => {
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

        <form className="p-4  flex flex-col gap-5 sm:flex sm:flex-row">
          {/* current password */}
          <div className="password">
            <input
              name="currentPassword"
              id="currentPassword"
              placeholder="current password"
              type="text"
              className="studentInputClass"
            />
          </div>

          {/* new password */}
          <div className="password">
            <input
              name="newPassword"
              id="newPassword"
              placeholder="new password"
              type="text"
              className="studentInputClass"
            />
          </div>

          {/* new password */}
          <div className="password">
            <input
              name="confirmNewPassword"
              id="confirmNewPassword"
              placeholder="confirm password"
              type="text"
              className="studentInputClass"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Password;
