import React, { useState, memo, useEffect } from "react";
import { useNavigate, useLocation, useOutletContext } from "react-router-dom";
import SelectInput from "../../../components/selectInput";
import { createStudentRegistration } from "../../../services/firestore/students/students";
import Spinner from "../../../components/spinner";
import { useProgrammeFormHooks } from "../../../schemas/programme";
import { useStudentContext } from "../../../context/students";

import {
  subjectCombinationWithId,
  departmentWithId,
  entryModeWithId,
  subjectCombinationSep,
} from "../../../utilities/programme";

const Programme = memo(() => {
  const [currentPath, setCurrentPath] = useOutletContext();
  const { state, dispatch } = useStudentContext();
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { olevels } = state;
  const { pathname } = useLocation();
  const { setYearRange } = state;

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
  };

  const {
    register,
    reset,
    trigger,
    watch,
    handleSubmit,
    errors,
    isSubmitting,
    isValidating,
    isValid,
  } = useProgrammeFormHooks();

  // check if previous page has been handled
  const redirectToOlevels = () => {
    const GlobalsittingNumber = olevels?.GlobalsittingNumber;
    if (!GlobalsittingNumber) {
      const PREVROUTE = "/students/add-student/olevels";
      navigate(PREVROUTE);
    } else {
      // get last path
      const lastPath = pathname.split("/").pop();
      currentPath !== lastPath && setCurrentPath(lastPath);
    }
  };

  useEffect(() => {
    redirectToOlevels();
  }, [olevels]);

  // Conditioning subject selection
  const watchDept = watch("department");
  var DeptCat = subjectCombinationSep[watchDept];

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
      await createStudentRegistration(setYearRange, studentFullName, studentData);
      // Navigate to next page
      const NEXTROUTE = "/students";
      navigate(NEXTROUTE);
      window.location.reload();
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
      // localStorage.clear();
      reset();
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
        {/* Proposed Course of Study */}
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
            className={`bg-green-900 px-5 py-4 capitalize rounded-md text-white  cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out flex items-center gap-x-2 ${
              isLoading && "opacity-50"
            }}`}
            onClick={onFormComplete}
          >
            <Spinner isLoading={isLoading} override={override} size={20} />
            <span>complete</span>
          </button>
        )}
      </div>
    </form>
  );
});
export default Programme;
