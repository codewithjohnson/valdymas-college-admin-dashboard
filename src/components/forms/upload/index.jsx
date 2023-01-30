import React, { useEffect } from "react";
import { useOutletContext, useNavigate, useLocation } from "react-router-dom";
import { useStudentContext } from "../../../context/students";
import DataCapture from "../../../components/dataTable/data-capture";

const UploadForm = () => {
  const [currentPath, setCurrentPath] = useOutletContext();
  const { state, dispatch } = useStudentContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { olevelCertificate, passport } = state?.dataCapture;

  useEffect(() => {
    const lastPath = pathname.split("/").pop();
    currentPath !== lastPath && setCurrentPath(lastPath);
  }, []);

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
          <form className="mt-10">
            <div className="select">
              <select
                name="selectFiles"
                id="selectFiles"
                className="studentInputClass cursor-pointer"
              >
                <option value="select">select file to upload</option>
                <option value="passport">passport</option>
                <option value="olevel">olevel</option>
              </select>
            </div>
            <div className=" mt-5">
              <label htmlFor="attachment" className="capitalize text-gray-800 text-sm">
                attachments
              </label>
              <input
                type="file"
                name="file"
                className="studentInputClass cursor-pointer"
              />
              <div className="submit flex flex-row justify-end mt-5 mb-5">
                <button className="bg-green-900 px-5 py-4 capitalize rounded-md text-white  cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out ">
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
        </div>
      </main>
    </div>
  );
};

export default UploadForm;
