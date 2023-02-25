import { memo, useEffect, useState } from "react";
import { useIsAdmin } from "../../../../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const Biodata = memo(({ student, year }) => {
  const [data, setData] = useState([]);
  const [editText, setEditText] = useState("Edit");
  const [isEdit, setIsEdit] = useState(false);
  const { isAdmin } = useIsAdmin();
  const { pathname } = useLocation();

  // extract the student id from the url which is the last part of the url
  const studentId = pathname.split("/").pop();

  const handleInputEdit = (e, index) => {
    const { value } = e.target;
    const newData = [...data];
    newData[index].value = value;
    setData(newData);
  };

  const handleSaveToDb = () => {
    setIsEdit(false);
  };

  useEffect(() => {
    setData(returnBiodata());
  }, [student]);

  const firstName = student?.[0]?.firstname;
  const lastName = student?.[0]?.lastname;
  const middleName = student?.[0]?.middlename;
  const fullName = `${firstName} ${lastName}`;
  const email = student?.[0]?.email;
  const phoneNumber = student?.[0]?.phoneNumber;
  const gender = student?.[0]?.gender;
  const dateOfBirth = student?.[0]?.dateOfBirth;
  const contactAddress = student?.[0]?.contactAddress;
  const religion = student?.[0]?.religion;
  const nationality = student?.[0]?.nationality;
  const maritalStatus = student?.[0]?.maritalStatus;
  const stateOfOrigin = student?.[0]?.stateOfOrigin;
  const lga = student?.[0]?.lga;

  // convert the above to an array of objects with label and value
  function returnBiodata() {
    const biodata = [
      { label: "first name", value: firstName },
      { label: "last name", value: lastName },
      { label: "middle name", value: middleName },
      { label: "full name", value: fullName },
      { label: "email", value: email },
      { label: "phone number", value: phoneNumber },
      { label: "gender", value: gender },
      { label: "date of birth", value: dateOfBirth },
      { label: "contact address", value: contactAddress },
      { label: "religion", value: religion },
      { label: "nationality", value: nationality },
      { label: "marital status", value: maritalStatus },
      { label: "state of origin", value: stateOfOrigin },
      { label: "lga", value: lga },
    ];

    return biodata;
  }

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
            onClick={() => handleSaveToDb()}
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
