import { memo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// utilities
import {
  waecSubjects,
  olevelGrades,
  examTypes,
  examYears,
} from "../../../utilities/olevels";

// Components
import SelectInput from "../../selectInput";

const Olevel = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  return (
    <form className="form border border-slate-200 p-3 mt-5">
      <div className="sittings mb-10">
        <label htmlFor="sittings" className="capitalize text-gray-600 ">
          number of sittings
        </label>
        <SelectInput
          register={register}
          inputName={"sittings"}
          arrayToLoop={[1, 2]}
          classname={`cursor-pointer studentInputClass`}
        />
      </div>
      {/*------- FLEX DIV THAT CONTAINS ONE OR TWO SITTINGS ---------*/}
      <div className="exam--subjects flex justify-between">
        <div className="sitting-one">
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

        {/* --------------------SECOND SITTING----------------------- */}

        <div className="sitting-two">
          {/* SELECT EXAM TYPE ND YEAR */}
          <div className="examType--examYear flex gap-4">
            <div className="examType w-1/2">
              <label
                htmlFor="secondSittingexamType"
                className="capitalize text-gray-600"
              >
                exam type{" "}
                <span className=" text-[11px] capitalize bg-gray-600 text-white rounded-md w-max p-1 ml-3 select-none ">
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
      </div>
    </form>
  );
};

const OlevelForm = memo(Olevel);
export default OlevelForm;
