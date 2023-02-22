import React, { useEffect, useState } from "react";
import { useNewAdminFormHooks } from "../../../../schemas/newAdmin";
import Spinner from "../../../../components/spinner";

const NewAdmin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "black",
  };

  const {
    newAdminRegister,
    newAdminReset,
    newAdminHandleSubmit,
    newAdminSetValue,
    errors,
    newAdminIsValid,
    newAdminIsSubmitted,
    newAdminIsSubmitSuccessful,
  } = useNewAdminFormHooks();

  useEffect(() => {
    newAdminIsSubmitSuccessful &&
      newAdminIsSubmitted &&
      !isLoading &&
      newAdminReset();
  }, [newAdminIsSubmitSuccessful, newAdminIsSubmitted]);

  const onFormSubmit = (data) => {
    console.log(data);
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-full  w-full">
      <header className="flex justify-between items-center mt-5 p-3">
        <h3 className="p-3 text-sm  capitalize bg-black text-gray-200 rounded-md w-max select-none font-medium">
          new admininstrator
        </h3>
        <p className="capitalize text-sm  text-green-800 font-semibold select-none p-3">
          valdymas college
        </p>
      </header>

      <form
        onSubmit={newAdminHandleSubmit(onFormSubmit)}
        className="p-3 bg-white flex flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-5"
      >
        {/* Name */}
        <div className="name">
          <label
            htmlFor="name"
            className="text-gray-600 text-[15px] capitalize"
          >
            name
          </label>

          <input
            name="name"
            id="name"
            placeholder="kolawole joshua"
            type="text"
            {...newAdminRegister("name")}
            className="studentInputClass"
          />
          {errors?.name && (
            <p role="alert" className="errorMessage">
              {errors?.name.message}
            </p>
          )}
        </div>

        {/* email */}
        <div className="email">
          <label
            htmlFor="email"
            className="text-gray-600 text-[15px] capitalize"
          >
            email
          </label>

          <input
            name="email"
            id="email"
            placeholder="example@gmail.com"
            type="email"
            {...newAdminRegister("email")}
            className="studentInputClass"
          />
          {errors?.email && (
            <p role="alert" className="errorMessage">
              {errors?.email.message}
            </p>
          )}
        </div>

        {/* phone */}
        <div className="phone">
          <label
            htmlFor="phone"
            className="text-gray-600 text-[15px] capitalize"
          >
            phone
          </label>
          <input
            type="text"
            placeholder="+234 000 000 00"
            name="phoneNumber"
            id="phoneNumber"
            {...newAdminRegister("phoneNumber")}
            className="studentInputClass"
          />
          {errors?.phoneNumber && (
            <p role="alert" className="errorMessage">
              {errors?.phoneNumber.message}
            </p>
          )}
        </div>

        {/* department */}
        <div className="department">
          <label
            htmlFor="department"
            className="text-gray-600 text-[15px] capitalize"
          >
            department
          </label>
          <input
            type="text"
            name="department"
            id="department"
            placeholder="e.g arts"
            {...newAdminRegister("department")}
            className="studentInputClass"
          />
          {errors?.department && (
            <p role="alert" className="errorMessage">
              {errors?.department.message}
            </p>
          )}
        </div>

        {/* role */}
        <div className="institutionalRole">
          <label
            htmlFor="institutionalRole"
            className="text-gray-600 text-[15px] capitalize"
          >
            institutional role
          </label>
          <input
            type="text"
            name="institutionalRole"
            placeholder="e.g HOD arts"
            id="role"
            {...newAdminRegister("institutionalRole")}
            className="studentInputClass"
          />
          {errors?.institutionalRole && (
            <p role="alert" className="errorMessage">
              {errors?.institutionalRole.message}
            </p>
          )}
        </div>

        {/* location */}
        <div className="location">
          <label
            htmlFor="location"
            className="text-gray-600 text-[15px] capitalize"
          >
            location
          </label>
          <input
            type="text"
            placeholder="e.g lagos"
            name="location"
            id="location"
            {...newAdminRegister("location")}
            className="studentInputClass"
          />
          {errors?.location && (
            <p role="alert" className="errorMessage">
              {errors?.location.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div
          className={`buttons w-full col-end-4 flex justify-end ${
            newAdminIsValid ? "" : ""
          }`}
        >
          <button
            type="submit"
            disabled={isLoading}
            className="bg-green-900 px-5 py-4 capitalize rounded-md text-white  cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out flex flex-row justify-center items-center gap-2 "
          >
            <Spinner isLoading={isLoading} override={override} size={20} />
            create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewAdmin;
