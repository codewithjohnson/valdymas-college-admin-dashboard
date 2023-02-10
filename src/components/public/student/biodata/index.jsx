import { memo } from "react";

const Biodata = memo(({ student }) => {
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

  return (
    <div className="biodata bg-gray-900 rounded-2xl">
      <h3 className="p-3 py-5 text-sm sm:text-base capitalize select-none font-medium bg-gradient-to-r from-slate-800 to-sky-900 rounded-t-2xl w-full">
        Biodata (personal information)
      </h3>

      <ul className="p-5 grid grid-cols-1 gap-5  md:grid md:grid-cols-3">
        {biodata.map((data, index) => (
          <div key={index}>
            <label
              className="text-sm sm:text-base capitalize select-none  text-gray-400 font-medium"
              htmlFor={data.value}
            >
              {data.label}
            </label>
            <input
              type="text"
              name={data.value}
              id={data.value}
              value={data.value}
              disabled
              className="studentInputClass bg-slate-800 border-slate-800 text-gray-400"
            />
          </div>
        ))}
      </ul>
    </div>
  );
});

export default Biodata;
