import { memo, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useIsAdmin } from "../../../../hooks/useAdmin";
import { useGetStudentById } from "../../../../hooks/usegetStudentById";
import {
  createStudentInfoCollection,
  getValdymasCollectionRef,
} from "../../../../services/firestore/students/students";
import {
  collection,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const Biodata = memo(() => {
  const { ward } = useGetStudentById("biodata");
  const [data, setData] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const { isAdmin } = useIsAdmin();
  const { studentID } = useParams();
  const yearRange = "2022-2023";

  useEffect(() => {
    setData(refineWardObject(ward));
  }, [ward]);

  const handleInputEdit = (e, index) => {
    const { value } = e.target;
    const newData = [...data];
    newData[index].value = value;
    setData(newData);
  };

  function refineWardObject(ward) {
    const refinedWard = Object.keys(ward).map((key) => {
      const label = key
        .split(/(?=[A-Z])/)
        .join(" ")
        .toLowerCase();
      const value = ward[key];
      return { label, value };
    });
    return refinedWard;
  }

  const updateStudentBiodata = async (biodata) => {
    console.log("updateStudentBiodata");
    const studentInfoCollectionRef = await createStudentInfoCollection(
      yearRange,
      studentID
    );
    const biodataDocRef = doc(studentInfoCollectionRef, "biodata");
    console.log("biodataDocRef", data);
    await setDoc(biodataDocRef, { ...biodata });
  };

  return (
    <div className="biodata relative bg-gray-900 rounded-2xl">
      {isEdit && isAdmin && (
        <div className="editstatus absolute bg-red-500 text-black -top-4 px-4 text-[12px] capitalize left-2 select-none  ">
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
          <button
            onClick={() => updateStudentBiodata()}
            className={`text-sm sm:text-base capitalize select-none rounded-xl hover:bg-gray-800 bg-gray-900 p-3 ${
              isEdit ? "bg-red-900" : ""
            }`}
          >
            save biodata
          </button>
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
