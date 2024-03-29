import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { nigeriaStatesWithId, nigeriaLgas } from "../../../utilities/nigeria";
import { useBiodataFormHooks, SetFormValues } from "../../../schemas/biodata";
import { addBiodataDispatcher } from "../../../dispatches/biodata/biodata";
import { useStudentContext } from "../../../context/students";
import { useLocation, useOutletContext } from "react-router-dom";

const BiodataForm = () => {
  const [currentPath, setCurrentPath] = useOutletContext();
  const { state, dispatch } = useStudentContext();
  const { biodata } = state;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    register,
    watch,
    biodataReset,
    trigger,
    handleSubmit,
    setValue,
    errors,
    bioDataIsValid,
  } = useBiodataFormHooks();

  useEffect(() => {
    biodataReset();
    if (biodata) {
      SetFormValues(setValue, biodata);
    }
    // get last path
    const lastPath = pathname.split("/").pop();
    currentPath !== lastPath && setCurrentPath(lastPath);
  }, [biodata]);

  // Watch state of origin
  const watchState = watch("stateOfOrigin");
  var stateLgas = nigeriaLgas[watchState];

  // Handle form submit
  const onBiodataFormSubmit = (data) => {
    dispatch(addBiodataDispatcher(data));
    const NEXTROUTE = "/students/add-student/upload";
    navigate(NEXTROUTE);
  };

  return (
    <div className="p-5 pb-8 font-poppins">
      <header className="flex justify-between items-center">
        <h3 className="p-3 pb-5 text-sm text-green-900 capitalize bg-green-100 rounded-md w-max select-none font-medium">
          Biodata (personal information)
        </h3>
        <p className="capitalize text-sm sm:text-base text-green-800 font-semibold select-none ">
          step 1 <span>/</span> <span className="text-red-800">3</span>
        </p>
      </header>
      <form
        onSubmit={handleSubmit(onBiodataFormSubmit)}
        className="w-full h-full mt-5 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-x-10  gap-y-7"
      >
        {/* FIRST NAME */}
        <div className="firstname">
          <label htmlFor="firstname" className="text-gray-600 text-[15px] capitalize">
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name "
            name="firstname"
            id="firstname"
            {...register("firstname")}
            className="studentInputClass"
          />
          {errors?.firstname && (
            <p role="alert" className="errorMessage">
              {errors?.firstname.message}
            </p>
          )}
        </div>

        {/* LAST NAME */}
        <div className="lastname">
          <label htmlFor="lastname" className="text-gray-600 text-[15px] capitalize">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Last Name "
            name="lastname"
            {...register("lastname")}
            id="lastname"
            className="studentInputClass"
          />
          {errors?.lastname && (
            <p role="alert" className="errorMessage">
              {errors?.lastname.message}
            </p>
          )}
        </div>

        {/* MIDDLE NAME */}
        <div className="middlename">
          <label htmlFor="middlename" className="text-gray-600 text-[15px] capitalize">
            Middle Name
          </label>
          <input
            type="text"
            placeholder="Middle Name "
            name="middlename"
            id="middlename"
            {...register("middlename")}
            className="studentInputClass"
          />
          {errors?.middlename && (
            <p role="alert" className="errorMessage">
              {errors?.middlename.message}
            </p>
          )}
        </div>

        {/* EMAIL  */}
        <div className="email">
          <label htmlFor="email" className="text-gray-600 text-[15px] capitalize">
            Email
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            {...register("email")}
            id="email"
            className="studentInputClass"
          />
          {errors?.email && (
            <p role="alert" className="errorMessage">
              {errors?.email.message}
            </p>
          )}
        </div>

        {/* PHONE NUMBER */}
        <div className="phoneNumber">
          <label htmlFor="phoneNumber" className="text-gray-600 text-[15px] capitalize">
            contact number
          </label>
          <input
            type="text"
            placeholder="+234 000 000 00"
            name="phoneNumber"
            id="phoneNumber"
            {...register("phoneNumber")}
            className="studentInputClass"
          />
          {errors?.phonenumber && (
            <p role="alert" className="errorMessage">
              {errors?.phonenumber.message}
            </p>
          )}
        </div>

        {/* GENDER SELECT ELEMENT */}
        <div className="gender">
          <label htmlFor="gender" className="text-gray-600 text-[15px] capitalize">
            gender
          </label>
          <select
            name="gender"
            id="gender"
            className="cursor-pointer studentInputClass"
            {...register("gender")}
          >
            <option value="" className="font-poppins">
              select
            </option>
            <option value="female" className="font-poppins">
              female
            </option>
            <option value="male" className="font-poppins">
              male
            </option>
          </select>
          {errors?.gender && (
            <p role="alert" className="errorMessage">
              {errors?.gender.message}
            </p>
          )}
        </div>

        {/* DATE OF BIRTH */}
        <div className="date-of-birth">
          <label htmlFor="gender" className="text-gray-600 text-[15px] capitalize">
            date of birth
          </label>
          <input
            type="date"
            name="dateOfBirth"
            {...register("dateOfBirth")}
            id="dateOfBirth"
            className="studentInputClass"
            max={new Date().toISOString().split("T")[0]}
          />
          {errors?.dateOfBirth && (
            <span className="errorMessage">{errors?.dateOfBirth.message}</span>
          )}
        </div>

        {/* CONTACT ADDRESS */}
        <div className="col-span-2 contactaddress">
          <label
            htmlFor="contactAddress"
            className="text-gray-600 text-[15px] capitalize"
          >
            contact address
          </label>
          <input
            type="text"
            placeholder="Enter Address"
            name="contactAddress"
            {...register("contactAddress")}
            id="contactAddress"
            className="studentInputClass"
          />
          {errors?.contactAddress && (
            <span className="errorMessage">{errors?.contactAddress.message}</span>
          )}
        </div>

        {/* RELIGION SELECT ELEMENT */}
        <div className="religion">
          <label htmlFor="religion" className="text-gray-600 text-[15px] capitalize">
            religion
          </label>
          <select
            name="religion"
            id="religion"
            {...register("religion")}
            className="cursor-pointer studentInputClass"
          >
            <option value="" className="font-poppins">
              select
            </option>
            <option value="christainity" className="font-poppins">
              christainity
            </option>
            <option value="islam" className="font-poppins">
              islam
            </option>
            <option value="others" className="font-poppins">
              others
            </option>
          </select>
          {errors?.religion && (
            <p role="alert" className="errorMessage">
              {errors?.religion.message}
            </p>
          )}
        </div>

        {/* NATIONALITY SELECT ELEMENT */}
        <div className="nationality">
          <label htmlFor="nationality" className="text-gray-600 text-[15px] capitalize">
            nationality
          </label>
          <select
            name="nationality"
            id="nationality"
            {...register("nationality")}
            className="cursor-pointer studentInputClass"
          >
            <option value="" className="font-poppins">
              select
            </option>
            <option value="Nigerian" className="font-poppins">
              Nigerian
            </option>
            <option value="others" className="font-poppins">
              others
            </option>
          </select>
          {errors?.nationality && (
            <p role="alert" className="errorMessage">
              {errors?.nationality.message}
            </p>
          )}
        </div>

        {/* MARITAL STATUS SELECT ELEMENT */}
        <div className="maritalStatus">
          <label htmlFor="maritalStatus" className="text-gray-600 text-[15px] capitalize">
            marital status
          </label>
          <select
            name="maritalStatus"
            id="maritalStatus"
            {...register("maritalStatus")}
            className="cursor-pointer studentInputClass"
          >
            <option value="" className="font-poppins">
              select
            </option>
            <option value="Nigerian" className="font-poppins">
              single
            </option>
            <option value="others" className="font-poppins">
              married
            </option>
          </select>
          {errors?.maritalStatus && (
            <p role="alert" className="errorMessage">
              {errors?.maritalStatus.message}
            </p>
          )}
        </div>

        {/* STATE OF ORIGIN SELECT ELEMENT */}
        <div className="stateOfOrigin">
          <label htmlFor="stateOfOrigin" className="text-gray-600 text-[15px] capitalize">
            state of origin
          </label>
          <select
            name="stateOfOrigin"
            id="stateOfOrigin"
            className="cursor-pointer studentInputClass"
            {...register("stateOfOrigin")}
          >
            <option value="" className="font-poppins">
              select
            </option>
            {nigeriaStatesWithId?.map((state) => {
              return (
                <option key={state.id} value={state.state} className="font-poppins">
                  {state.state}
                </option>
              );
            })}
          </select>
          {errors?.stateOfOrigin && (
            <p role="alert" className="errorMessage">
              {errors?.stateOfOrigin.message}
            </p>
          )}
        </div>

        {/* LGA OF ORIGIN SELECT */}
        <div className="lga">
          <label htmlFor="lga" className="text-gray-600 text-[15px]">
            LGA
          </label>
          <select
            name="lga"
            id="lga"
            className="cursor-pointer studentInputClass"
            {...register("lga")}
          >
            {watchState &&
              stateLgas?.map((lga, index) => {
                return (
                  <option key={index} value={lga} className="font-poppins">
                    {lga}
                  </option>
                );
              })}
          </select>
          {errors?.lga && (
            <p role="alert" className="errorMessage">
              {errors?.lga.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="btns col-start-4  col-end-3 row-end-7 place-self-end flex gap-x-4">
          <button
            type="submit"
            className="bg-green-900 px-5 py-4 capitalize rounded-md text-white  cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out "
          >
            next page
          </button>
        </div>
      </form>
    </div>
  );
};

export default BiodataForm;
