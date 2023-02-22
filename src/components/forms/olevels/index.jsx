import { memo, useEffect, useState } from "react";
import { useNavigate, useLocation, useOutletContext } from "react-router-dom";

// Components
import SelectInput from "../../selectInput";

// form hooks
import {
  firstSittingFormHooks,
  secondSittingFormHooks,
  setFirstSittingFormValues,
  setSecondSittingFormValues,
} from "../../../schemas/olevels";
import { useStudentContext } from "../../../context/students";

// utilities
import {
  waecSubjectsWithId,
  olevelGradesWithId,
  examTypesWithId,
  examYearsWithId,
  examsWithId,
} from "../../../utilities/olevels";

const Olevel = () => {
  const [currentPath, setCurrentPath] = useOutletContext();
  const { state, dispatch } = useStudentContext();
  const [sittingNumber, setSittingNumber] = useState("1");
  const [isSubmitted, setIsubmitted] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    firstSittingRegister,
    firstSittingReset,
    firstSittingTrigger,
    firstSittingSetValue,
    firstSittingSetError,
    firstSittingHandleSubmit,
    firstSittingIsValid,
    firstSittingIsSubmitted,
    firstSittingIsSubmitSuccessful,
  } = firstSittingFormHooks();

  const {
    secondSittingRegister,
    secondSittingReset,
    secondSittingTrigger,
    secondSittingSetValue,
    secondSittingSetError,
    secondSittingHandleSubmit,
    secondSittingIsValid,
    secondSittingIsSubmitted,
    secondSittingIsSubmitSuccessful,
  } = secondSittingFormHooks();

  // get last path
  const getPath = () => {
    const lastPath = pathname.split("/").pop();
    currentPath !== lastPath && setCurrentPath(lastPath);
  };

  // check if previous page [biodata] has been handled
  const { olevelResult, passport } = state?.dataCapture;
  const { sittingOne, sittingTwo } = state?.olevels;

  // check if olevel and passport is uploaded
  const checkDataCaptureIsDone = () => {
    if (!olevelResult.status && !passport.status) {
      const redirectRoute = "/students/add-student/upload";
      navigate(redirectRoute);
    }
  };

  // set form values
  const setFormValues = () => {
    const globalSittingNumber = state?.olevels?.GlobalsittingNumber;
    if (globalSittingNumber === "1" || globalSittingNumber === "2") {
      setSittingNumber(globalSittingNumber);
      setFirstSittingFormValues(firstSittingSetValue, sittingOne);
    }
    if (globalSittingNumber === "2") {
      setSecondSittingFormValues(secondSittingSetValue, sittingTwo);
    }
  };

  // set form values on mount
  useEffect(() => {
    checkDataCaptureIsDone();
    setFormValues();
    getPath();
  }, []);

  // Form One
  const onFormOneSubmit = (data) => {
    const sittingOneData = { sittingNumber: sittingNumber, ...data };
    dispatch({
      type: "OLEVELS/SET_GLOBAL_SITTING_NUMBER",
      payload: { GlobalsittingNumber: sittingNumber },
    });
    dispatch({ type: "OLEVELS/SITTING_ONE", payload: sittingOneData });
    setIsubmitted(true);
  };

  // Form Two
  const onFormTwoSubmit = (data) => {
    const sittingTwoData = { sittingNumber: sittingNumber, ...data };
    dispatch({
      type: "OLEVELS/SET_GLOBAL_SITTING_NUMBER",
      payload: { GlobalsittingNumber: sittingNumber },
    });
    dispatch({ type: "OLEVELS/SITTING_TWO", payload: sittingTwoData });
    setIsubmitted(true);
  };

  // go to previous page
  const goToPreviousPage = (e) => {
    e.preventDefault();
  };

  // go to next page
  const goToNextPage = (e) => {
    e.preventDefault();
    const NEXTROUTE = "/students/add-student/programme";
    navigate(NEXTROUTE);
    firstSittingReset();
    secondSittingReset();
    setIsubmitted(false);
  };

  return (
    <>
      {/* SITTING NUMBER */}
      <form className="sittingNumber mb-10 mt-5">
        <label htmlFor="sittings" className="capitalize text-gray-600 ">
          number of sittings
        </label>
        <select
          name="sittingNumber"
          id="sittingNumber"
          className="cursor-pointer studentInputClass"
          value={sittingNumber}
          onChange={(e) => setSittingNumber(e.target.value)}
        >
          <option value="1" className="font-poppins ">
            1
          </option>
          <option value="2" className="font-poppins ">
            2
          </option>
        </select>
      </form>

      <div className="sittings flex-col lg:flex lg:flex-row justify-between border border-slate-200 p-3 mt-5 gap-x-10 ">
        {/* SITTING ONE */}
        {(sittingNumber === "1" || sittingNumber === "2") && (
          <form
            onSubmit={firstSittingHandleSubmit(onFormOneSubmit)}
            className={`w-full bg-green-50`}
          >
            <div className={`sitting-one p-3 w-full`}>
              {/* SELECT EXAM TYPE ND YEAR */}
              <div className="examType--examYear flex gap-4 mt-3">
                {/* Exam Type */}
                <div className="examType w-1/2">
                  <label
                    htmlFor="firstSittingexamType"
                    className="capitalize text-gray-500"
                  >
                    exam type{" "}
                    <span className=" text-[11px] capitalize bg-gray-600 text-white rounded-md w-max p-1 ml-3 select-none ">
                      first sitting
                    </span>
                  </label>
                  <SelectInput
                    register={firstSittingRegister}
                    inputName={"firstSittingexamType"}
                    arrayToLoop={examTypesWithId}
                    classname={`cursor-pointer studentInputClass w-full mt-3`}
                  />
                </div>

                <div className="examYear w-1/2">
                  <div className="label w-full text-right">
                    <label
                      htmlFor="firstSittingexamYear"
                      className="text-gray-600 text-[15px] w-full capitalize"
                    >
                      year
                    </label>
                  </div>

                  <SelectInput
                    register={firstSittingRegister}
                    inputName={"firstSittingexamYear"}
                    arrayToLoop={examYearsWithId}
                    classname={`cursor-pointer studentInputClass w-full mt-3`}
                  />
                </div>
              </div>

              {/* SELECT EXAM PLACE AND REGISTRATION NUMBER */}
              <div className="exam--examNumber flex justify-between items-center gap-4 mt-10">
                {/* FIRST SITTING EXAM */}
                <div className="firstSittingexam w-1/2">
                  <label
                    htmlFor="firstSittingexam"
                    className="text-gray-600 text-[15px] capitalize"
                  >
                    exam
                  </label>
                  <SelectInput
                    register={firstSittingRegister}
                    inputName={"firstSittingexam"}
                    arrayToLoop={examsWithId}
                    classname={`cursor-pointer studentInputClass w-full mt-3`}
                  />
                </div>

                <div className="firstSittingexamNumber w-1/2">
                  <div className="label w-full text-left">
                    <label
                      htmlFor="firstSittingexamNumber"
                      className="text-gray-600 text-[15px] w-full capitalize"
                    >
                      registration number
                    </label>
                  </div>

                  <input
                    type="text"
                    className="studentInputClass w-full mt-3"
                    name="firstSittingexamNumber"
                    id="firstSittingexamNumber"
                    placeholder="Awaiting ?"
                    {...firstSittingRegister("firstSittingexamNumber")}
                  />
                </div>
              </div>

              <hr className="bg-black mt-7 border border-slate-200" />

              {/* Subject and Grade Container */}
              <div className="olevels--container mt-6 flex justify-between gap-4 ">
                {/* Subject Container */}
                <div className="subjectContainer w-1/2">
                  <label
                    htmlFor="olevel_one"
                    className="text-gray-600 text-[15px] capitalize"
                  >
                    subject
                  </label>
                  {/* display SelectInput 9 times */}
                  {Array(9)
                    .fill()
                    .map((_, index) => {
                      return (
                        <SelectInput
                          register={firstSittingRegister}
                          inputName={`olevel_one_${index + 1}`}
                          arrayToLoop={waecSubjectsWithId}
                          classname={
                            "cursor-pointer block w-full text-[14px] border rounded-lg shadow-sm bg-[#FAFAFA] placeholder-slate-300 border-purple-300 focus:outline-none focus:ring focus:ring-indigo-100 hover:border-indigo-800 mt-3"
                          }
                        />
                      );
                    })}
                </div>

                {/* Grade Container */}
                <div className="gradeContainer w-1/2">
                  <div className="label w-full text-right">
                    <label
                      htmlFor="grade_one"
                      className="text-gray-600 text-[15px] w-full capitalize"
                    >
                      grades
                    </label>
                  </div>

                  {Array(9)
                    .fill()
                    .map((_, index) => {
                      return (
                        <SelectInput
                          register={firstSittingRegister}
                          inputName={`grade_one_${index + 1}`}
                          arrayToLoop={olevelGradesWithId}
                          classname={
                            "cursor-pointer block w-full text-[14px] border rounded-lg shadow-sm bg-[#FAFAFA] placeholder-slate-300 border-purple-300 focus:outline-none focus:ring focus:ring-indigo-100 hover:border-indigo-800 mt-3"
                          }
                        />
                      );
                    })}
                </div>
              </div>
            </div>

            {/* -----------SUBMIT FORM BTN ONE------------- */}
            <div
              className={`btns py-5 px-3 flex justify-end lg:justify-start `}
            >
              <button
                type="submit"
                className={`bg-gray-600 px-5 py-4 capitalize rounded-md text-white  cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out  ${
                  firstSittingIsValid ? "visible" : "invisible"
                }`}
              >
                save
              </button>
            </div>
          </form>
        )}

        {/* SECOND SITTING FORM */}
        {sittingNumber === "2" && (
          <form
            key={2}
            onSubmit={secondSittingHandleSubmit(onFormTwoSubmit)}
            className="w-full bg-green-50"
          >
            <div className={`sitting-two w-full p-3 mt-10 sm:mt-0 `}>
              {/* SELECT EXAM TYPE ND YEAR */}
              <div className="examType--examYear flex justify-between items-center gap-x-4 mt-3">
                <div className="examType w-1/2">
                  <label
                    htmlFor="secondSittingexamType"
                    className="capitalize text-gray-600"
                  >
                    exam type{" "}
                    <span className=" text-[9px] sm:text-[11px] capitalize bg-gray-600 text-white rounded-md w-max p-1 ml-3 select-none ">
                      second sitting
                    </span>
                  </label>
                  <SelectInput
                    register={secondSittingRegister}
                    inputName={"secondSittingexamType"}
                    arrayToLoop={examTypesWithId}
                    classname={`cursor-pointer studentInputClass w-full mt-3`}
                  />
                </div>

                <div className="examYear w-1/2">
                  <div className="label w-full text-right">
                    <label
                      htmlFor="secondSittingexamYear"
                      className="text-gray-600 text-[15px] w-full capitalize"
                    >
                      year
                    </label>
                  </div>

                  <SelectInput
                    register={secondSittingRegister}
                    inputName={"secondSittingexamYear"}
                    arrayToLoop={examYearsWithId}
                    classname={`cursor-pointer studentInputClass w-full mt-3`}
                  />
                </div>
              </div>

              {/* SELECT EXAM PLACE AND REGISTRATION NUMBER */}
              <div className="exam--examNumber flex justify-between items-center gap-4 mt-10">
                <div className="exam w-1/2">
                  <label
                    htmlFor="secondSittingexam"
                    className="text-gray-600 text-[15px] capitalize"
                  >
                    exam
                  </label>
                  <SelectInput
                    register={secondSittingRegister}
                    inputName={"secondSittingexam"}
                    arrayToLoop={examsWithId}
                    classname={`cursor-pointer studentInputClass w-full mt-3`}
                  />
                </div>

                <div className="secondSittingexamNumber w-1/2">
                  <div className="label w-full text-right">
                    <label
                      htmlFor="secondSittingexamNumber"
                      className="text-gray-600 text-[15px] w-full capitalize"
                    >
                      registration number
                    </label>
                  </div>

                  <input
                    type="text"
                    className=" studentInputClass w-full mt-3"
                    name="secondSittingexamNumber"
                    id="secondSittingexamNumber"
                    placeholder="Awaiting ?"
                    {...secondSittingRegister("secondSittingexamNumber")}
                  />
                </div>
              </div>

              <hr className="bg-black mt-7 border border-slate-200" />

              {/* Subject Container */}
              <div className="olevels--container mt-6 flex justify-between gap-4 ">
                <div className="subjectContainer w-1/2">
                  <label
                    htmlFor="olevel_two"
                    className="text-gray-600 text-[15px] capitalize"
                  >
                    subject
                  </label>
                  {/* display SelectInput 9 times */}
                  {Array(9)
                    .fill()
                    .map((_, index) => {
                      return (
                        <SelectInput
                          register={secondSittingRegister}
                          inputName={`olevel_two_${index + 1}`}
                          arrayToLoop={waecSubjectsWithId}
                          classname={
                            "cursor-pointer block w-full text-[14px] border rounded-lg shadow-sm bg-[#FAFAFA] placeholder-slate-300 border-purple-300 focus:outline-none focus:ring focus:ring-indigo-100 hover:border-indigo-800 mt-3"
                          }
                        />
                      );
                    })}
                </div>

                {/* Grade Container */}
                <div className="gradeContainer w-1/2">
                  <div className="label w-full text-right">
                    <label
                      htmlFor="grade_two"
                      className="text-gray-600 text-[15px] w-full capitalize"
                    >
                      grades
                    </label>
                  </div>

                  {Array(9)
                    .fill()
                    .map((_, index) => {
                      return (
                        <SelectInput
                          register={secondSittingRegister}
                          inputName={`grade_two_${index + 1}`}
                          arrayToLoop={olevelGradesWithId}
                          classname={
                            "cursor-pointer block w-full text-[14px] border rounded-lg shadow-sm bg-[#FAFAFA] placeholder-slate-300 border-purple-300 focus:outline-none focus:ring focus:ring-indigo-100 hover:border-indigo-800 mt-3"
                          }
                        />
                      );
                    })}
                </div>
              </div>
            </div>

            {/* SUBMIT BUTTON SITTING TWO */}
            <div className="btns py-5 px-3 flex justify-end ">
              <button
                type="submit"
                className={`bg-gray-600 px-5 py-4  capitalize rounded-md text-white  cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out ${
                  secondSittingIsValid ? "visible" : "invisible"
                }`}
              >
                save
              </button>
            </div>
          </form>
        )}
      </div>

      {/* -----------NEXT and prev PAGE BUTTON------------- */}
      <div className="btns py-5 flex justify-center gap-x-5 mt-5">
        <button
          onClick={goToPreviousPage}
          className="bg-black px-5 py-4 capitalize rounded-md text-white  cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out"
        >
          previous page
        </button>

        <button
          onClick={goToNextPage}
          className={`bg-green-900 px-5 py-4 capitalize rounded-md text-white  cursor-pointer hover:scale-105 transform ${
            isSubmitted ? "visible" : "invisible"
          } transition duration-200 ease-in-out}`}
        >
          next page
        </button>
      </div>
    </>
  );
};

const OlevelForm = memo(Olevel);
export default OlevelForm;
