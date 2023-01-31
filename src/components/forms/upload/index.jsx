import React, { useState, useEffect } from "react";
import { useOutletContext, useNavigate, useLocation } from "react-router-dom";
import { useStudentContext } from "../../../context/students";
import DataCapture from "../../../components/dataTable/data-capture";
import { useUploadFormHooks } from "../../../schemas/upload";

const UploadForm = () => {
  const [isDone, setIsDone] = useState(false);
  const [currentPath, setCurrentPath] = useOutletContext();
  const { state, dispatch } = useStudentContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    uploadRegister,
    uploadHandleSubmit,
    uploadFormState,
    uploadReset,
    uploadErrors,
    uploadIsSubmitting,
    uploadIsValid,
    uploadIsSubmitted,
  } = useUploadFormHooks();

  useEffect(() => {
    const lastPath = pathname.split("/").pop();
    currentPath !== lastPath && setCurrentPath(lastPath);
  }, []);

  useEffect(() => {
    if (uploadIsSubmitted && uploadIsValid) {
      onFormSubmit(uploadFormState);
      uploadReset();
    }
  }, [uploadFormState]);

  const convertFileToBase64 = (dispatchName, selectFiles, data) => {
    const reader = new FileReader();
    reader.readAsDataURL(data.attachment[0]);
    reader.onload = () => {
      const base64 = reader.result;
      dispatch({ type: dispatchName, payload: { selectFiles, base64 } });
    };
  };

  const onFormSubmit = (data) => {
    const { selectFiles } = data;
    if (selectFiles === "passport") {
      const dispatchName = "DATA_CAPTURE/ADD_PASSPORT";
      convertFileToBase64(dispatchName, selectFiles, data);
    } else if (selectFiles === "olevel") {
      const dispatchName = "DATA_CAPTURE/ADD_OLEVEL_RESULT";
      convertFileToBase64(dispatchName, selectFiles, data);
    }
  };

  const prevPage = (e) => {
    e.preventDefault();
    const PREVROUTE = "/students/add-student/biodata";
    navigate(PREVROUTE);
  };

  const nextPage = (e) => {
    e.preventDefault();
    navigate(1);
  };

  return (
    <div className="p-5 font-poppins">
      <header className="flex justify-between items-center">
        <h3 className="p-3 pb-5 text-sm text-green-900 capitalize bg-green-100 font-medium    rounded-md w-max select-none ">
          Data Capture (personal information)
        </h3>
        <p className="capitalize text-sm sm:text-base text-green-800 font-semibold select-none ">
          step 2 <span>/</span> <span className="text-red-800">3</span>
        </p>
      </header>
      <main className="mt-5">
        <section className="guide bg-amber-200 text-black p-5">
          <span className="font-bold capitalize">instructions: </span>
          <span className="text-gray-700 pl-3">
            you are to upload the student <span className="font-semibold">passport</span>{" "}
            picture and <span className="font-semibold">O'level</span> result
          </span>
        </section>
        <section>
          <form onSubmit={uploadHandleSubmit(onFormSubmit)} className="mt-10">
            <div className="select">
              <select
                name="selectFiles"
                id="selectFiles"
                {...uploadRegister("selectFiles")}
                className={`studentInputClass cursor-pointer ${
                  uploadErrors?.selectFiles && "border-red-800"
                }`}
              >
                <option value="select">select file to upload</option>
                <option value="passport">passport</option>
                <option value="olevel">olevel</option>
              </select>
              {uploadErrors?.selectFiles && (
                <p className="text-red-800 text-[11px] mt-2">
                  {uploadErrors?.selectFiles.message}
                </p>
              )}
            </div>
            <div className=" mt-8">
              <div className="up">
                <label
                  htmlFor="attachment"
                  className="capitalize text-gray-800 text-sm font-medium"
                >
                  select image
                </label>
                <input
                  type="file"
                  name="attachment"
                  id="attachment"
                  {...uploadRegister("attachment")}
                  className={`studentInputClass cursor-pointer placeholder:text-green-300 ${
                    uploadErrors?.attachment && "border-red-800"
                  }}`}
                />
                <p className=" text-[11px] mt-2 text-stone-900">
                  accepted files: png, jpeg, jpg{" "}
                  <span className="text-green-800">
                    (file size should not exceed 200kb)
                  </span>{" "}
                </p>
                {uploadErrors?.attachment && (
                  <p className="text-red-800 text-[11px] mt-2">
                    {uploadErrors?.attachment.message}
                  </p>
                )}
              </div>
              <div className="submit flex flex-row justify-end mt-5 mb-5">
                <button
                  className={`bg-green-900 px-5 py-4 capitalize rounded-md text-white  cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out ${
                    uploadIsValid ? "block" : "hidden"
                  } `}
                >
                  submit
                </button>
              </div>
            </div>
          </form>
        </section>

        {/* display saved passport and olevel certificate to local storage */}
        <div className="dataCapture">
          <p className="capitalize mb-7 mt-15 text-lg text-green-900 font-semibold">
            uploaded documents
          </p>
          <DataCapture />
          <div className="navigate mt-8 mb-10 flex flex-row justify-between ">
            {/* previous page */}
            <button
              onClick={prevPage}
              type="button"
              className={`bg-green-900 px-5 py-4 capitalize rounded-md text-white cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out  `}
            >
              prev page
            </button>
            {/* next page */}
            <button
              type="button"
              onClick={nextPage}
              className={`bg-green-900 px-5 py-4 capitalize rounded-md text-white  cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out ${
                uploadIsValid ? "block" : "hidden"
              } `}
            >
              next page
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UploadForm;
