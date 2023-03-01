import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useIsAdmin } from "../../../../hooks/useAdmin";
import { useGetStudentById } from "../../../../hooks/usegetStudentById";
import { updateStudentBiodata } from "../../../../services/firestore/students/students";
import Spinner from "../../../spinner/Spinner";

const Biodata = memo(() => {
  const { ward: biodata } = useGetStudentById("biodata");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const { isAdmin } = useIsAdmin();
  const { studentID } = useParams();

  // TODO: extract year range to a global variable
  const yearRange = "2022-2023";

  useEffect(() => {
    setData(refineWardObject(biodata));
  }, [biodata]);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
  };

  // function to handle input edit
  const handleInputEdit = (e, index) => {
    const { value } = e.target;
    const newData = [...data];
    newData[index].value = value;
    setData(newData);
  };

  // function to handle biodata update
  const handleBiodataUpdate = async () => {
    try {
      setIsLoading(true);
      const updatedBiodataData = convertDataToWardFormat(data);
      await updateStudentBiodata(yearRange, studentID, updatedBiodataData);
      setIsEdit(false);
      setIsLoading(false);
    } catch (err) {
      alert(err.message);
      setIsLoading(false);
    }
  };

  // function to refine ward object
  function refineWardObject(biodata) {
    const refinedWard = Object.keys(biodata).map((key) => {
      const label = key
        .split(/(?=[A-Z])/)
        .join(" ")
        .toLowerCase();
      const value = biodata[key];
      return { label, value };
    });
    return refinedWard;
  }

  // function to convert data to ward object format
  function convertDataToWardFormat(data) {
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
    <div className="biodata relative bg-gray-900 rounded-2xl">
      {isEdit && isAdmin && (
        <div className="editstatus absolute bg-red-500 text-black -top-2 px-4 text-[12px] capitalize left-2 select-none  ">
          {" "}
          currently editing biodata
        </div>
      )}
      <header className="bg-gradient-to-r from-slate-800 to-sky-900 p-3 py-5 flex flex-row justify-between items-center rounded-t-2xl w-full">
        <h3 className="text-sm sm:text-base capitalize select-none font-medium  ">
          Biodata (personal information)
        </h3>

        {isAdmin && !isEdit && (
          <button
            onClick={() => setIsEdit(!isEdit)}
            className={`text-sm sm:text-base capitalize select-none rounded-xl hover:bg-gray-800 bg-gray-900 p-3 ${
              isEdit ? "bg-red-900" : ""
            }`}
          >
            edit biodata
          </button>
        )}

        {isEdit && isAdmin && (
          <div className="btns flex flex-row gap-3">
            <button
              onClick={() => handleBiodataUpdate()}
              className={`text-sm sm:text-base capitalize select-none rounded-xl hover:bg-gray-800 bg-gray-900 p-3 ${
                isEdit ? "bg-red-900" : ""
              }

              ${isLoading ? "cursor-not-allowed opacity-50" : ""}
            
              `}
            >
              {!isLoading ? (
                "save biodata"
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

      <ul className="p-5 grid grid-cols-1 gap-5  md:grid md:grid-cols-3">
        {data?.map((data, index) => (
          <div key={index}>
            <label
              className="text-sm sm:text-base capitalize select-none  text-gray-400 font-medium"
              htmlFor={data.value}
            >
              {data.label}
            </label>
            <input
              type="text"
              disabled={isEdit && isAdmin ? false : true}
              name={data.value}
              id={data.value}
              value={data.value}
              onChange={(e) => handleInputEdit(e, index)}
              className="studentInputClass bg-slate-800 border-slate-800 text-gray-400"
            />
          </div>
        ))}
      </ul>
    </div>
  );
});

export default Biodata;
