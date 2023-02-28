import { useEffect, useState } from "react";
import { useGetStudentById } from "../../../../hooks/usegetStudentById";

const StudentDocs = () => {
  const { ward: biodata } = useGetStudentById("biodata");
  const [data, setData] = useState();

  const firstName = data?.firstname;
  const lastName = data?.lastname;
  const fullName = `${firstName} ${lastName}`;

  useEffect(() => {
    if (biodata) {
      setData(biodata);
    }
  }, [biodata]);

  const StudentDoc = ({ link, docName, icon, textClassName }) => {
    return (
      <a
        href={link}
        target="_blank"
        className={`oath py-3 mt-5 border border-gray-800 bg-slate-900 w-full px-3 flex flex-row justify-between items-center text-sm`}
      >
        <span className={`${textClassName}`}> {docName}</span>
        {icon}
      </a>
    );
  };

  return (
    <div className="font-poppins px-5 sm:px-20 text-gray-400  sm:mt-10 w-full">
      <header className="">
        <p className="text-xl sm:text-2xl font-semibold capitalize">
          Hi {fullName} <span className="text-red-600">!</span>{" "}
        </p>
      </header>

      <main className="mt-5 sm:mt-10">
        {/* BODY TEXT */}
        <section className="h-full">
          <p className="text-sm sm:text-base leading-7 sm:leading-9 text-justify">
            VALDYMAS was founded in{" "}
            <span className="underline decoration-sky-500/60 decoration-2 underline-offset-4">
              2015
            </span>{" "}
            and was established on core principles and strategic disciplines.
            Below are required {""}
            <span className="underline decoration-orange-500/80 decoration-2 underline-offset-4">
              documents
            </span>{" "}
            you have to download. please read through them, follow instructions,
            and if you have any questions, please do not hesitate to{" "}
            <a
              className="underline decoration-fuchsia-500/70 decoration-2 underline-offset-4 hover:text-orange-600"
              href="https://wa.me/2348069583812"
              target="_blank"
              rel="noopener
              noreferrer"
            >
              {" "}
              contact
            </a>{" "}
            us.
          </p>
        </section>
        <section className="sm:w-1/2  mt-10 text-justify h-full leading-7 ">
          <p className="mb-4 sm:text-lg leading-7 py-2 sm:leading-9 text-justify bg-gradient-to-r from-orange-800 to-slate-800 text-white px-5">
            {" "}
            Documents
          </p>

          {/* DOCUMENTS */}
          <div className="docs">
            {/* oath form */}
            <StudentDoc
              link={
                "https://drive.google.com/file/d/1GPpXWpSO9vQlexuDQgEEdj7-k-KGOOP7/view?usp=share_link"
              }
              docName={"dowload oath form"}
              icon={<span className="material-symbols-outlined">download</span>}
              textClassName={"text-gray-400 capitalize"}
            />
          </div>

          {/* billing */}
          <StudentDoc
            link={
              "https://drive.google.com/file/d/1o-Al3YNskUTi94svG23PdL9jBONz0Rgj/view?usp=share_link"
            }
            docName={"dowload billing schedule"}
            icon={<span className="material-symbols-outlined">download</span>}
            textClassName={"text-gray-400 capitalize"}
          />

          {/* handbook */}

          <StudentDoc
            link={
              "https://drive.google.com/file/d/1N9RR02k6PvpaUCcdX_s1CAtqj1Q63h5y/view?usp=share_link"
            }
            docName={"download student handbook"}
            icon={
              <span className="material-symbols-outlined text-orange-400">
                download
              </span>
            }
            textClassName={"text-orange-400 capitalize"}
          />

          {/* letter vol 1 */}
          <StudentDoc
            link={
              "https://drive.google.com/file/d/1d78kkiekcG9LtHdoxGAnaV2p_390sS8p/view?usp=share_link"
            }
            docName={"Valdymas newsletter volume 1"}
            icon={
              <span className="material-symbols-outlined text-orange-400">
                download
              </span>
            }
            textClassName={"text-orange-400 capitalize"}
          />

          {/* letter vol 2 */}
          <StudentDoc
            link={
              "https://drive.google.com/file/d/1d78kkiekcG9LtHdoxGAnaV2p_390sS8p/view?usp=share_link"
            }
            docName={"Valdymas newsletter volume 2"}
            icon={
              <span className="material-symbols-outlined text-orange-400">
                download
              </span>
            }
            textClassName={"text-orange-400 capitalize"}
          />
        </section>
      </main>
    </div>
  );
};

export default StudentDocs;
