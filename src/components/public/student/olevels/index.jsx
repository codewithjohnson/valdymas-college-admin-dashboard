import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useIsAdmin } from "../../../../hooks/useAdmin";
import { useGetStudentById } from "../../../../hooks/usegetStudentById";

const Olevels = memo(() => {
  const { ward: olevelsData } = useGetStudentById("olevels");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const { isAdmin } = useIsAdmin();
  const { studentID } = useParams();
  const yearRange = "2022-2023";

  useEffect(() => {
    setData(olevelsData);
  }, [olevelsData]);

  const GlobalsittingNumber = olevelsData?.[2]?.GlobalsittingNumber;
  const sittingOne = olevelsData?.[2]?.sittingOne;
  const sittingTwo = olevelsData?.[2]?.sittingTwo;

  const firstSittingexamType = sittingOne?.firstSittingexamType;
  const firstSittingexamYear = sittingOne?.firstSittingexamYear;
  const firstSittingexamNumber = sittingOne?.firstSittingexamNumber;
  const firstSittingexam = sittingOne?.firstSittingexam;

  // create an array from the four variable above with label and value
  const firstSittingHeaderArray = [
    { label: "exam type", value: firstSittingexamType },
    { label: "exam year", value: firstSittingexamYear },
    { label: "exam number", value: firstSittingexamNumber },
    { label: "exam", value: firstSittingexam },
  ];

  const subjectOne = sittingOne?.subjectOne;
  const subjectTwo = sittingOne?.subjectTwo;
  const subjectThree = sittingOne?.subjectThree;
  const subjectFour = sittingOne?.subjectFour;
  const subjectFive = sittingOne?.subjectFive;
  const subjectSix = sittingOne?.subjectSix;
  const subjectSeven = sittingOne?.subjectSeven;
  const subjectEight = sittingOne?.subjectEight;
  const subjectNine = sittingOne?.subjectNine;

  // create an array from the nine variable above with subject and grade as label and value
  const subjectArray = [
    { subject: subjectOne?.subject, value: subjectOne?.grade },
    { subject: subjectTwo?.subject, value: subjectTwo?.grade },
    { subject: subjectThree?.subject, value: subjectThree?.grade },
    { subject: subjectFour?.subject, value: subjectFour?.grade },
    { subject: subjectFive?.subject, value: subjectFive?.grade },
    { subject: subjectSix?.subject, value: subjectSix?.grade },
    { subject: subjectSeven?.subject, value: subjectSeven?.grade },
    { subject: subjectEight?.subject, value: subjectEight?.grade },
    { subject: subjectNine?.subject, value: subjectNine?.grade },
  ];

  const secondSittingexamType = sittingTwo?.secondSittingexamType;
  const secondSittingexamYear = sittingTwo?.secondSittingexamYear;
  const secondSittingexamNumber = sittingTwo?.secondSittingexamNumber;
  const secondSittingexam = sittingTwo?.secondSittingexam;

  // create an array from the four variable above with label and value
  const secondSittingHeaderArray = [
    { label: "exam type", value: secondSittingexamType },
    { label: "exam year", value: secondSittingexamYear },
    { label: "exam number", value: secondSittingexamNumber },
    { label: "exam", value: secondSittingexam },
  ];

  const subjectOne2 = sittingTwo?.subjectOne;
  const subjectTwo2 = sittingTwo?.subjectTwo;
  const subjectThree2 = sittingTwo?.subjectThree;
  const subjectFour2 = sittingTwo?.subjectFour;
  const subjectFive2 = sittingTwo?.subjectFive;
  const subjectSix2 = sittingTwo?.subjectSix;
  const subjectSeven2 = sittingTwo?.subjectSeven;
  const subjectEight2 = sittingTwo?.subjectEight;
  const subjectNine2 = sittingTwo?.subjectNine;

  // create an array from the nine variable above with subject and grade as label and value
  const subjectArray2 = [
    { subject: subjectOne2?.subject, value: subjectOne2?.grade },
    { subject: subjectTwo2?.subject, value: subjectTwo2?.grade },
    { subject: subjectThree2?.subject, value: subjectThree2?.grade },
    { subject: subjectFour2?.subject, value: subjectFour2?.grade },
    { subject: subjectFive2?.subject, value: subjectFive2?.grade },
    { subject: subjectSix2?.subject, value: subjectSix2?.grade },
    { subject: subjectSeven2?.subject, value: subjectSeven2?.grade },
    { subject: subjectEight2?.subject, value: subjectEight2?.grade },
    { subject: subjectNine2?.subject, value: subjectNine2?.grade },
  ];

  return (
    <div className="olevels bg-gray-900 rounded-2xl">
      <h3 className="p-3 py-5 text-sm sm:text-base capitalize select-none font-medium bg-gradient-to-r from-slate-800 to-sky-900 rounded-t-2xl w-full">
        O'level result details
      </h3>
      <main className="p-5">
        <div className="sitting">
          <label
            className="text-sm sm:text-base capitalize select-none  text-gray-400 font-medium"
            htmlFor="sitting"
          >
            Number of sitting(s)
          </label>
          <input
            type="text"
            disabled
            className="studentInputClass bg-slate-800 border-slate-800 text-gray-400"
            value={GlobalsittingNumber}
          />
        </div>
        <section>
          <div className="mt-2">
            <div className="grid gap-5 grid-cols-1 md:grid md:grid-cols-2">
              {/* first sitting header */}
              <div className="sitting__one">
                <p className="text-gray-400 mt-2 mb-2 capitalize bg-black w-fit px-3 py-3 select-none">
                  sitting one
                </p>
                {[].map((item, index) => {
                  return (
                    <div key={index} className="sittingOne">
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

                <div className="FIRST-SITTING w-full mt-4">
                  <div className="head flex flex-row justify-between capitalize border-b border-slate-700 py-1 text-gray-500">
                    <p>subject</p>
                    <p>grade</p>
                  </div>

                  <ul className="result">
                    {[].map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="result flex flex-row justify-between capitalize text-gray-400"
                        >
                          <p className="py-2">{item.subject}</p>
                          <p className="py-2">{item.value}</p>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* second sitting */}
              <div className="sitting__two">
                <p className="text-gray-400 mt-2 mb-2 capitalize bg-black w-fit px-3 py-3 select-none">
                  sitting two
                </p>
                {[].map((item, index) => {
                  return (
                    <div key={index} className="sittingOne">
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

                <div className="SECOND-SITTING w-full mt-4">
                  <div className="head flex flex-row justify-between capitalize border-b border-slate-700 py-1 text-gray-500">
                    <p>subject</p>
                    <p>grade</p>
                  </div>

                  <div className="result">
                    {[].map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="result flex flex-row justify-between capitalize text-gray-400"
                        >
                          <p className="py-2"> {item.subject}</p>
                          <p className="py-2">{item.value}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
});
export default Olevels;
