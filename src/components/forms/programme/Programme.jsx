import React, { useState, memo, useEffect } from "react";
import { useNavigate, useLocation, useOutletContext } from "react-router-dom";

// state context
import { useStudentContext } from "../../../context/students";
import { useYearContext } from "../../../context/setYears/setYears";

// components
import SelectInput from "../../selectInput";
import Spinner from "../../spinner/Spinner";

// firestore
import {
  createStudentDoc,
  createStudentRegistration,
} from "../../../services/firestore/students/students";

import { getStudentIdFromAdmin } from "../../../utilities/auth/getId";

// form hooks
import {
  useProgrammeFormHooks,
  SetFormValues,
} from "../../../schemas/programme";

import {
  subjectCombinationWithId,
  departmentWithId,
  entryModeWithId,
} from "../../../utilities/programme";

const Programme = () => {
  const [currentPath, setCurrentPath] = useOutletContext();
  const { state, dispatch } = useStudentContext();
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { olevels } = state;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { state: yearState } = useYearContext();
  const { setYearRange: currentYear } = yearState;

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "black",
  };

  const {
    register,
    reset,
    setValue,
    handleSubmit,
    errors,
    isSubmitting,
    isValidating,
    isValid,
  } = useProgrammeFormHooks();

  // get last path
  const getPath = () => {
    const lastPath = pathname.split("/").pop();
    currentPath !== lastPath && setCurrentPath(lastPath);
  };

  // check if previous page has been handled
  const redirectToOlevels = () => {
    const GlobalsittingNumber = olevels?.GlobalsittingNumber;
    if (!GlobalsittingNumber) {
      const PREVROUTE = "/students/add-student/olevels";
      navigate(PREVROUTE);
    }
  };

  useEffect(() => {
    redirectToOlevels();
    SetFormValues(setValue, state?.programme);
    getPath();
  }, [olevels]);

  // Handle save information
  const onFormSubmitAndSave = async (data) => {
    dispatch({ type: "PROGRAMME/SET_PROGRAMME", payload: data });
    setIsSaved(true);
  };

  //  Handle for previous page
  const goToPreviousPage = (e) => {
    e.preventDefault();
    const PREVROUTE = "/students/add-student/olevels";
    navigate(PREVROUTE);
  };

  // Handle for submission
  const onFormComplete = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const studentData = state;
      const studentFullName = `${studentData?.biodata?.firstname} ${studentData?.biodata?.lastname}`;
      const studentID = await getStudentIdFromAdmin(currentYear, studentData);

      if (studentID) {
        // create student doc
        const studentIdFromDb = await createStudentDoc(
          currentYear,
          studentID,
          studentFullName
        );

        // create student registration
        await createStudentRegistration(
          currentYear,
          studentIdFromDb,
          studentData
        );
        alert("Student registration successful");
        setIsLoading(false);
        reset();

        // remove stored data
        localStorage.removeItem("storedStudentData");

        // navigate to next page
        const NEXTROUTE = "/students";
        navigate(NEXTROUTE);
      }
    } catch (err) {
      alert(err.message);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmitAndSave)} className="mt-7">
      <div className="top sm:flex justify-between gap-x-10">
        {/* Mode Of Entry */}
        <div className="modeOfEntry w-full">
          <label
            htmlFor="modeOfEntry"
            className="text-gray-800 text-[15px] w-full capitalize"
          >
            Mode of entry
          </label>
          <SelectInput
            register={register}
            inputName={"modeOfEntry"}
            arrayToLoop={entryModeWithId}
            classname={`cursor-pointer studentInputClass w-full mt-3`}
          />
        </div>

        {/* Department */}
        <div className="department w-full items-center mt-5 sm:mt-0">
          <label
            htmlFor="department"
            className="text-gray-800 text-[15px] w-full capitalize"
          >
            department
          </label>
          <SelectInput
            register={register}
            inputName={"department"}
            arrayToLoop={departmentWithId}
            classname={`cursor-pointer studentInputClass w-full mt-3`}
          />
        </div>
      </div>

      <div className="bottom  sm:flex justify-between gap-x-10 mt-5 sm:mt-10">
        <div className="left w-full">
          {/* course of study */}
          <div className="courseOfStudy mt-6 w-full">
            <label
              htmlFor="courseOfStudy"
              className="text-gray-800 text-[15px] w-full capitalize"
            >
              proposed course of study
            </label>
            <input
              type="text"
              id="courseOfStudy"
              name="courseOfStudy"
              placeholder="proposed course"
              {...register("courseOfStudy")}
              className="studentInputClass w-full mt-3"
            />
            {errors.courseOfStudy && (
              <p className="text-red-500 text-[12px] mt-1">
                {errors.courseOfStudy.message}
              </p>
            )}
          </div>

          {/* agent */}
          <div className="courseOfStudy mt-6 w-full">
            <label
              htmlFor="agent"
              className="text-gray-800 text-[15px] w-full capitalize"
            >
              Agent
            </label>
            <input
              type="text"
              id="agent"
              name="agent"
              placeholder="agent"
              {...register("agent")}
              className="studentInputClass w-full mt-3"
            />
            {errors.agent && (
              <p className="text-red-500 text-[12px] mt-1">
                {errors.agent.message}
              </p>
            )}
          </div>
        </div>

        {/* Subject Combination */}
        <div className="subjectCombination mt-6 w-full">
          <label
            htmlFor="subjectCombination"
            className="text-gray-800 text-[15px] w-full capitalize"
          >
            subject combination
          </label>
          <SelectInput
            register={register}
            inputName={"subject1"}
            arrayToLoop={subjectCombinationWithId}
            classname={`cursor-pointer studentInputClass w-full mt-3`}
          />
          <SelectInput
            register={register}
            inputName={"subject2"}
            arrayToLoop={subjectCombinationWithId}
            classname={`cursor-pointer studentInputClass w-full mt-3`}
          />
          <SelectInput
            register={register}
            inputName={"subject3"}
            arrayToLoop={subjectCombinationWithId}
            classname={`cursor-pointer studentInputClass w-full mt-3`}
          />
        </div>
      </div>

      {/* -----------SAVE BTN & NEXT and prev PAGE BUTTON------------- */}
      <div className="btns py-5 flex justify-between gap-x-5 mt-5 ">
        <button
          onClick={goToPreviousPage}
          disabled={isSubmitting || isValidating}
          className="bg-black px-5 py-4 capitalize rounded-md text-white  cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out"
        >
          previous page
        </button>

        {/* SAVE DATA */}
        {isValid && (
          <button
            type="submit"
            className={`bg-gray-600 px-5 py-4  capitalize rounded-md text-white  cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out}`}
          >
            save
          </button>
        )}

        {/* Next Page */}
        {isSaved && (
          <button
            disabled={isLoading}
            className={`bg-green-900 px-5 py-4 capitalize rounded-md text-white  cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out flex items-center gap-x-2
             ${isLoading ? "opacity-20" : "opacity-100"}}`}
            onClick={onFormComplete}
          >
            <Spinner isLoading={isLoading} override={override} size={20} />
            <span>complete</span>
          </button>
        )}
      </div>
    </form>
  );
};
export default Programme;
