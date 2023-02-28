import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetStudentById } from "../../../../hooks/usegetStudentById";
import { useIsAdmin } from "../../../../hooks/useAdmin";
import Spinner from "../../../spinner";
import { updateStudentProgramme } from "../../../../services/firestore/students/students";

const Programme = memo(() => {
  const { ward: programmeData } = useGetStudentById("programme");
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isAdmin } = useIsAdmin();
  const { studentID } = useParams();
  const yearRange = "2022-2023";

  useEffect(() => {
    setData(refineProgrammeObject(programmeData));
  }, [programmeData]);

  const handleInputEdit = (e, index) => {
    const { value } = e.target;
    const newData = [...data];
    newData[index].value = value;
    setData(newData);
  };

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
  };

  const handleBiodataUpdate = async () => {
    try {
      setIsLoading(true);
      const UpdatedprogrammeData = convertDataToProgrammeFormat(data);
      await updateStudentProgramme(yearRange, studentID, UpdatedprogrammeData);
      setIsEdit(false);
      setIsLoading(false);
    } catch (err) {
      alert(err.message);
      setIsLoading(false);
    }
  };

  // function to refine programme to array of object labels and values
  function refineProgrammeObject(programmeData) {
    const refinedProgramme = Object.keys(programmeData).map((key) => {
      const label = key
        .split(/(?=[A-Z])/)
        .join(" ")
        .toLowerCase();
      const value = programmeData[key];
      return { label, value };
    });
    return refinedProgramme;
  }

  // function to convert data to programme exact object format
  function convertDataToProgrammeFormat(data) {
    return data?.reduce((acc, curr) => {
      const { label, value } = curr;
      const key = label
        .split(" ")
        .map((word, index) => {
          if (index === 0) return word;
          return word[0].toUpperCase() + word.slice(1);
        })
        .join("");
      return { ...acc, [key]: value };
    }, {});
  }

  return (
    <div className="programme bg-gray-900 rounded-2xl relative">
      {isEdit && isAdmin && (
        <div className="editstatus absolute bg-red-500 text-black -top-4 px-4 text-[12px] capitalize left-2 select-none  ">
          {" "}
          currently editing programme
        </div>
      )}
      <header className="bg-gradient-to-r from-slate-800 to-sky-900 p-3 py-5 flex flex-row justify-between items-center rounded-t-2xl w-full">
        <h3 className="text-sm sm:text-base capitalize select-none font-medium  ">
          programme details
        </h3>

        {isAdmin && !isEdit && (
          <button
            onClick={() => setIsEdit(!isEdit)}
            className={`text-sm sm:text-base capitalize select-none rounded-xl hover:bg-gray-800 bg-gray-900 p-3 ${
              isEdit ? "bg-red-900" : ""
            }`}
          >
            edit programme
          </button>
        )}

        {isEdit && isAdmin && (
          <div className="btns btns flex flex-row gap-3">
            <button
              onClick={() => handleBiodataUpdate()}
              className={`text-sm sm:text-base capitalize select-none rounded-xl hover:bg-gray-800 bg-gray-900 p-3 ${
                isEdit ? "bg-red-900" : ""
              }

              ${isLoading ? "cursor-not-allowed opacity-50" : ""}
            
              `}
            >
              {!isLoading ? (
                "save programme"
              ) : (
                <span className="flex flex-row gap-4 items-center">
                  <Spinner
                    isLoading={isLoading}
                    override={override}
                    size={18}
                  />{" "}
                  <span className="normal-case"> saving...</span>
                </span>
              )}
            </button>

            {/* cancel button */}
            {isEdit && (
              <button
                onClick={() => setIsEdit(false)}
                className="p-3 bg-slate-800 rounded-xl text-white text-sm sm:text-base px-5 hover:bg-slate-900 "
              >
                cancel
              </button>
            )}
          </div>
        )}
      </header>

      {/* main */}
      <main className="p-5 grid grid-cols-1 gap-5 md:grid md:grid-cols-3">
        {data?.map((item, index) => {
          return (
            <div key={index} className="programmeDetails">
              <label
                className="text-sm sm:text-base capitalize select-none  text-gray-400 font-medium"
                htmlFor="sitting"
              >
                {item.label}
              </label>
              <input
                type="text"
                disabled={isEdit && isAdmin ? false : true}
                className="studentInputClass bg-slate-800 border-slate-800 text-gray-400"
                value={item.value}
                onChange={(e) => handleInputEdit(e, index)}
              />
            </div>
          );
        })}
      </main>
    </div>
  );
});

export default Programme;
