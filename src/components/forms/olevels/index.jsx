import { memo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Components
import SelectInput from "../../selectInput";

// utilities
import {
  waecSubjects,
  olevelGrades,
  examTypes,
  examYears,
  exams,
} from "../../../utilities/olevels";

const Olevel = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const watchSittingNumber = watch("sittingNumber");
  console.log(watchSittingNumber);

  const onFormSubmit = (data) => {
    reset();
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="form border border-slate-200 p-3 mt-5"
    >
      <div className="sittingNumber mb-10">
        <label htmlFor="sittings" className="capitalize text-gray-600 ">
          number of sittings
        </label>
        <SelectInput
          register={register}
          inputName={"sittingNumber"}
          arrayToLoop={[1, 2]}
          classname={`cursor-pointer studentInputClass`}
        />
      </div>
      {/*-------  ONE OR TWO SITTINGS ---------*/}
      <div className="exam--subjects flex-col lg:flex lg:flex-row justify-between gap-x-5 ">
        {/*-------------------FIRST SITTING--------------------- */}
        {(watchSittingNumber === "1" || watchSittingNumber === "2") && (
          <div
            className={`sitting-one ${
              watchSittingNumber === "1" ? "w-full" : ""
            }`}
          >
            {/* SELECT EXAM TYPE ND YEAR */}
            <div className="examType--examYear flex gap-4">
              <div className="examType w-1/2">
                <label
                  htmlFor="firstSittingexamType"
                  className="capitalize text-gray-600"
                >
                  exam type{" "}
                  <span className=" text-[11px] capitalize bg-gray-600 text-white rounded-md w-max p-1 ml-3 select-none ">
                    first sitting
                  </span>
                </label>
                <SelectInput
                  register={register}
                  inputName={"firstSittingexamType"}
                  arrayToLoop={examTypes}
                  classname={`cursor-pointer studentInputClass w-full mt-3`}
                />
              </div>

              <div className="examYear w-1/2">
                <div className="label w-full text-right">
                  <label
                    htmlFor="olevel_one"
                    className="text-gray-600 text-[15px] w-full capitalize"
                  >
                    year
                  </label>
                </div>

                <SelectInput
                  register={register}
                  inputName={"firstSittingexamYear"}
                  arrayToLoop={examYears}
                  classname={`cursor-pointer studentInputClass w-full mt-3`}
                />
              </div>
            </div>

            {/* SELECT EXAM PLACE AND REGISTRATION NUMBER */}
            <div className="exam--examNumber flex justify-between items-center gap-4 mt-5">
              {/* FIRST SITTING EXAM */}
              <div className="firstSittingexam w-1/2">
                <label
                  htmlFor="firstSittingexam"
                  className="text-gray-600 text-[15px] capitalize"
                >
                  exam
                </label>
                <SelectInput
                  register={register}
                  inputName={"firstSittingexam"}
                  arrayToLoop={exams}
                  classname={`cursor-pointer studentInputClass w-full mt-3`}
                />
              </div>

              <div className="firstSittingexamNumber w-1/2">
                <div className="label w-full text-right">
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
                  {...register("firstSittingexamNumber")}
                />
              </div>
            </div>

            <hr className="bg-black mt-7 border border-slate-200" />

            {/* Subject Container */}
            <div className="olevels--container mt-6 flex justify-between gap-4 ">
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
                        register={register}
                        inputName={`olevel_one_${index + 1}`}
                        arrayToLoop={waecSubjects}
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
                        register={register}
                        inputName={`grade_one${index + 1}`}
                        arrayToLoop={olevelGrades}
                        classname={
                          "cursor-pointer block w-full text-[14px] border rounded-lg shadow-sm bg-[#FAFAFA] placeholder-slate-300 border-purple-300 focus:outline-none focus:ring focus:ring-indigo-100 hover:border-indigo-800 mt-3"
                        }
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        )}

        {/* --------------------SECOND SITTING----------------------- */}
        {watchSittingNumber === "2" && (
          <div className={`sitting-two mt-10 sm:mt-0`}>
            {/* SELECT EXAM TYPE ND YEAR */}
            <div className="examType--examYear flex justify-between items-center gap-4">
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
                  register={register}
                  inputName={"secondSittingexamType"}
                  arrayToLoop={examTypes}
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
                  register={register}
                  inputName={"secondSittingexamYear"}
                  arrayToLoop={examYears}
                  classname={`cursor-pointer studentInputClass w-full mt-3`}
                />
              </div>
            </div>

            {/* SELECT EXAM PLACE AND REGISTRATION NUMBER */}
            <div className="exam--examNumber flex justify-between items-center gap-4 mt-5">
              <div className="exam w-1/2">
                <label
                  htmlFor="secondSittingexam"
                  className="text-gray-600 text-[15px] capitalize"
                >
                  exam
                </label>
                <SelectInput
                  register={register}
                  inputName={"secondSittingexam"}
                  arrayToLoop={examTypes}
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
                  {...register("secondSittingexamNumber")}
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
                        register={register}
                        inputName={`olevel_two_${index + 1}`}
                        arrayToLoop={waecSubjects}
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
                        register={register}
                        inputName={`grade_two_${index + 1}`}
                        arrayToLoop={olevelGrades}
                        classname={
                          "cursor-pointer block w-full text-[14px] border rounded-lg shadow-sm bg-[#FAFAFA] placeholder-slate-300 border-purple-300 focus:outline-none focus:ring focus:ring-indigo-100 hover:border-indigo-800 mt-3"
                        }
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* -----------BTNS------------- */}
      <div className="btns py-5 flex justify-end">
        <button
          type="submit"
          className="bg-purple-700 px-5 py-4 capitalize rounded-md text-white  cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out"
        >
          next page
        </button>
      </div>
    </form>
  );
};

const OlevelForm = memo(Olevel);
export default OlevelForm;
