import { memo } from "react";

const Programme = memo(({ student }) => {
  const programme = student?.[3];
  const modeOfEntry = programme?.modeOfEntry;
  const department = programme?.department;
  const courseOfStudy = programme?.courseOfStudy;
  const subject1 = programme?.subject1;
  const subject2 = programme?.subject2;
  const subject3 = programme?.subject3;

  // create and array from above with labels and values
  const programmeDetails = [
    { label: "mode of entry", value: modeOfEntry },
    { label: "department", value: department },
    { label: "course of study", value: courseOfStudy },
    { label: "subject 1", value: subject1 },
    { label: "subject 2", value: subject2 },
    { label: "subject 3", value: subject3 },
  ];

  return (
    <div className="programme bg-gray-900 rounded-2xl">
      <h3 className="p-3 py-5 text-sm sm:text-base capitalize select-none font-medium bg-gradient-to-r from-slate-800 to-sky-900 rounded-t-2xl w-full">
        programme details
      </h3>
      <main className="p-5 grid grid-cols-1 gap-5 md:grid md:grid-cols-3">
        {programmeDetails.map((item, index) => {
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
                disabled
                className="studentInputClass bg-slate-800 border-slate-800 text-gray-400"
                value={item.value}
              />
            </div>
          );
        })}
      </main>
    </div>
  );
});

export default Programme;
