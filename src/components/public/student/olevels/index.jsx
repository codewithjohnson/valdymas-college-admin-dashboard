import { memo } from "react";

const Olevels = memo(({ student }) => {
  const GlobalsittingNumber = student?.[2]?.GlobalsittingNumber;
  const sittingOne = student?.[2]?.sittingOne;
  const sittingTwo = student?.[2]?.sittingTwo;

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
  console.log(subjectOne);
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

  return (
    <div className="olevels  bg-gray-900 rounded-2xl">
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
            <header className="grid gap-5 grid-cols-1 md:grid md:grid-cols-2">
              {/* first sitting header */}
              <div className="sitting__one">
                <p className="text-gray-400 mt-2 mb-2 capitalize bg-black w-fit px-3 py-3 select-none">
                  sitting one
                </p>
                {firstSittingHeaderArray.map((item, index) => {
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
              </div>

              {/* second sitting */}
              <div className="sitting__two">
                <p className="text-gray-400 mt-2 mb-2 capitalize bg-black w-fit px-3 py-3 select-none">
                  sitting two
                </p>
                {secondSittingHeaderArray.map((item, index) => {
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
              </div>
            </header>
          </div>
        </section>
      </main>
    </div>
  );
});
export default Olevels;