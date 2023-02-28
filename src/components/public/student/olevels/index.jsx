import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useIsAdmin } from "../../../../hooks/useAdmin";
import { useGetStudentById } from "../../../../hooks/usegetStudentById";

const Olevels = memo(() => {
  const [isLoading, setIsLoading] = useState(false);
  const { ward: olevelsData } = useGetStudentById("olevels");
  const [data, setData] = useState({});
  console.log(data?.sittingTwo);
  const [isEdit, setIsEdit] = useState(false);
  const { isAdmin } = useIsAdmin();
  const { studentID } = useParams();

  // TODO: Extract yearRange to a global state
  const yearRange = "2022-2023";

  useEffect(() => {
    setData(olevelsData);
  }, [olevelsData]);

  // handle input changes for global sitting number
  const handleGlobalSittingNumberInputChanges = (e) => {
    setData({
      ...data,
      GlobalsittingNumber: e.target.value,
    });
  };

  // handle input changes for first sitting meta data
  const handlefirstSittingMetaInputChanges = (e) => {
    console.log(e.target.name);
    setData({
      ...data,
      sittingOne: {
        ...data.sittingOne,
        [e.target.name]: e.target.value,
      },
    });
  };

  // handle input changes for first sitting subject
  const handlefirstSittingSubjectInputChanges = (e) => {
    setData({
      ...data,
      sittingOne: {
        ...data.sittingOne,
        [e.target.name]: {
          ...data.sittingOne[e.target.name],
          subject: e.target.value,
        },
      },
    });
  };

  // handle input changes for first sitting grade
  const handlefirstSittingGradeInputChanges = (e) => {
    setData({
      ...data,
      sittingOne: {
        ...data.sittingOne,
        [e.target.name]: {
          ...data.sittingOne[e.target.name],
          grade: e.target.value,
        },
      },
    });
  };

  // handle input changes for second sitting meta data
  const handleSecondSittingMetaInputChanges = (e) => {
    console.log(e.target.name);
    setData({
      ...data,
      sittingTwo: {
        ...data.sittingTwo,
        [e.target.name]: e.target.value,
      },
    });
  };

  // handle input changes for second sitting subject
  const handleSecondSittingSubjectInputChanges = (e) => {
    setData({
      ...data,
      sittingTwo: {
        ...data.sittingTwo,
        [e.target.name]: {
          ...data.sittingTwo[e.target.name],
          subject: e.target.value,
        },
      },
    });
  };

  // handle input changes for second sitting grade
  const handleSecondSittingGradeInputChanges = (e) => {
    setData({
      ...data,
      sittingTwo: {
        ...data.sittingTwo,
        [e.target.name]: {
          ...data.sittingTwo[e.target.name],
          grade: e.target.value,
        },
      },
    });
  };

  const sittingOne = data?.sittingOne;
  const sittingTwo = data?.sittingTwo;

  const firstSittingexamType = sittingOne?.firstSittingexamType;
  const firstSittingexamYear = sittingOne?.firstSittingexamYear;
  const firstSittingexamNumber = sittingOne?.firstSittingexamNumber;
  const firstSittingexam = sittingOne?.firstSittingexam;

  // create an array from the four variable above with label and value
  const firstSittingHeaderArray = [
    {
      metaClass: "firstSittingexamType",
      label: "exam type",
      value: firstSittingexamType,
    },
    {
      metaClass: "firstSittingexamYear",
      label: "exam year",
      value: firstSittingexamYear,
    },
    {
      metaClass: "firstSittingexamNumber",
      label: "exam number",
      value: firstSittingexamNumber,
    },
    {
      metaClass: "firstSittingexam",
      label: "exam",
      value: firstSittingexam,
    },
  ];

  // rewrite firstSittingSubjectAndGradeArray using a function
  const firstSittingSubjectAndGradeArray = () => {
    const numberWords = [
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];
    const firstSittingSubjectAndGradeArray = [];
    for (let i = 0; i < numberWords.length; i++) {
      firstSittingSubjectAndGradeArray.push({
        subjectClass: `subject${numberWords[i]}`,
        subject: sittingOne?.[`subject${numberWords[i]}`].subject,
        grade: sittingOne?.[`subject${numberWords[i]}`].grade,
      });
    }
    return firstSittingSubjectAndGradeArray;
  };

  const secondSittingexamType = sittingTwo?.secondSittingexamType;
  const secondSittingexamYear = sittingTwo?.secondSittingexamYear;
  const secondSittingexamNumber = sittingTwo?.secondSittingexamNumber;
  const secondSittingexam = sittingTwo?.secondSittingexam;

  // create an array from the four variable above with label and value
  const secondSittingHeaderArray = [
    {
      metaClass: "secondSittingexamType",
      label: "exam type",
      value: secondSittingexamType,
    },
    {
      metaClass: "secondSittingexamYear",
      label: "exam year",
      value: secondSittingexamYear,
    },
    {
      metaClass: "secondSittingexamNumber",
      label: "exam number",
      value: secondSittingexamNumber,
    },
    {
      metaClass: "secondSittingexam",
      label: "exam",
      value: secondSittingexam,
    },
  ];
  // rewrite secondSittingSubjectAndGradeArray using a function
  const secondSittingSubjectAndGradeArray = () => {
    const numberWords = [
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];
    const secondSittingSubjectAndGradeArray = [];
    for (let i = 0; i < numberWords.length; i++) {
      secondSittingSubjectAndGradeArray.push({
        subjectClass: `subject${numberWords[i]}`,
        subject: sittingTwo?.[`subject${numberWords[i]}`].subject,
        grade: sittingTwo?.[`subject${numberWords[i]}`].grade,
      });
    }
    return secondSittingSubjectAndGradeArray;
  };

  return (
    <div className="olevels bg-gray-900 rounded-2xl">
      <h3 className="p-3 py-5 text-sm sm:text-base capitalize select-none font-medium bg-gradient-to-r from-slate-800 to-sky-900 rounded-t-2xl w-full">
        O'level result details
      </h3>
      <main className="p-5">
        {/* number of sitting */}
        <div className="sitting">
          <label
            className="text-sm sm:text-base capitalize select-none  text-gray-400 font-medium"
            htmlFor="sitting"
          >
            Number of sitting(s)
          </label>
          <input
            type="text"
            disabled={false}
            className="studentInputClass bg-slate-800 border-slate-800 text-gray-400"
            value={data.GlobalsittingNumber}
            onChange={(e) => handleGlobalSittingNumberInputChanges(e)}
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
                {firstSittingHeaderArray?.map((item, index) => {
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
                        name={item.metaClass}
                        className="studentInputClass bg-slate-800 border-slate-800 text-gray-400"
                        value={item.value}
                        onChange={(e) => handlefirstSittingMetaInputChanges(e)}
                      />
                    </div>
                  );
                })}

                <div className="FIRST-SITTING w-full mt-4">
                  <div className="head flex flex-row justify-between capitalize border-b border-slate-700 py-1 text-gray-500">
                    <p className="pl-2">subject</p>
                    <p>grade</p>
                  </div>

                  {/* first sitting subject and grade arrays */}
                  <ul className="result">
                    {firstSittingSubjectAndGradeArray()?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="result flex flex-row justify-between capitalize text-gray-400"
                        >
                          {/* subjects */}
                          <input
                            className="py-2 outline-none border-none bg-transparent w-[80%] text-left"
                            type="text"
                            name={item.subjectClass}
                            value={item.subject}
                            onChange={(e) =>
                              handlefirstSittingSubjectInputChanges(e)
                            }
                          />
                          {/* grade values */}
                          <input
                            className="py-2 outline-none border-none w-[20%] bg-transparent text-right"
                            type="text"
                            name={item.subjectClass}
                            value={item.grade}
                            onChange={(e) =>
                              handlefirstSittingGradeInputChanges(e)
                            }
                          />
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

                {/* second sitting header */}
                {secondSittingHeaderArray?.map((item, index) => {
                  return (
                    <div key={index} className="sittingOne">
                      <label
                        className="text-sm sm:text-base capitalize select-none  text-gray-400 font-medium"
                        htmlFor="sitting"
                      >
                        {item.label}
                      </label>
                      <input
                        className="studentInputClass bg-slate-800 border-slate-800 text-gray-400"
                        type="text"
                        name={item.metaClass}
                        value={item.value}
                        onChange={(e) => handleSecondSittingMetaInputChanges(e)}
                      />
                    </div>
                  );
                })}

                <div className="SECOND-SITTING w-full mt-4">
                  <div className="head flex flex-row justify-between capitalize border-b border-slate-700 py-1 text-gray-500">
                    <p className="pl-2">subject</p>
                    <p>grade</p>
                  </div>

                  {/* second sitting subject and grades array */}
                  <div className="result">
                    {secondSittingSubjectAndGradeArray()?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="result flex flex-row justify-between capitalize text-gray-400"
                        >
                          {/* subjects */}
                          <input
                            className="py-2 outline-none border-none bg-transparent w-[80%] text-left"
                            type="text"
                            name={item.subjectClass}
                            value={item.subject}
                            onChange={(e) =>
                              handleSecondSittingSubjectInputChanges(e)
                            }
                          />

                          {/* grade values */}
                          <input
                            className="py-2 outline-none border-none w-[20%] bg-transparent text-right"
                            type="text"
                            name={item.subjectClass}
                            value={item.grade}
                            onChange={(e) =>
                              handleSecondSittingGradeInputChanges(e)
                            }
                          />
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
