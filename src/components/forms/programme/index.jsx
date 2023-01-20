import React, { useState, memo, CSSProperties } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectInput from "../../../components/selectInput";
import { registerStudent } from "../../../services/firestore/students/students";
import Spinner from "../../../components/spinner";
import { useProgrammeFormHooks } from "../../../schemas/programme";

import {
  subjectCombinationWithId,
  departmentWithId,
  entryModeWithId,
} from "../../../utilities/programme";

const Programme = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [navigate, dispatch] = [useNavigate(), useDispatch()];
  const studentData = useSelector((state) => state);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "black",
  };

  const {
    register,
    reset,
    trigger,
    handleSubmit,
    errors,
    isSubmitting,
    isValidating,
    isValid,
  } = useProgrammeFormHooks();

  // Handle for submission
  const onFormSubmitAndNextPage = async (data) => {
    setIsLoading(true);
    dispatch({ type: "PROGRAMME/SET_PROGRAMME", payload: data });
    try {
      const studentFullName = `${studentData?.biodata?.firstname} ${studentData?.biodata?.lastname}`;
      await registerStudent(studentFullName, studentData);
      reset();
      const NEXTROUTE = "/students";
      navigate(NEXTROUTE);
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const goToPreviousPage = (e) => {
    e.preventDefault();
    const PREVROUTE = "/students/add-student/olevels";
    navigate(PREVROUTE);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmitAndNextPage)} className="mt-7">
      <div className="top sm:flex justify-between gap-x-10">
        {/* Mode Of Entry */}
        <div className="modeOfEntry w-full">
          <label htmlFor="" className="text-gray-800 text-[15px] w-full capitalize">
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
        <div className="department w-full items-center ">
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

      <div className="bottom  sm:flex justify-between gap-x-10 mt-10">
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

      {/* -----------NEXT and prev PAGE BUTTON------------- */}
      <div className="btns py-5 flex justify-between gap-x-5 mt-5 ">
        <button
          onClick={goToPreviousPage}
          className="bg-black px-5 py-4 capitalize rounded-md text-white  cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out"
        >
          previous page
        </button>

        {/* Next Page */}
        <button
          type="submit"
          className={`bg-green-900 px-5 py-4 capitalize rounded-md text-white  cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out flex items-center gap-x-2 ${isValid? "": "opacity-50 cursor-not-allowed"}}`}
        >
          <Spinner isLoading={isLoading} override={override} size={20} />
          <span>complete</span>
        </button>
      </div>
    </form>
  );
};

const ProgrammeForm = memo(Programme);
export default ProgrammeForm;
