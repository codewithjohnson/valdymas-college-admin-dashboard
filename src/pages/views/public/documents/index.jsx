import { useEffect, useState } from "react";
import { useGetStudentById } from "../../../../hooks/usegetStudentById";

const StudentDocs = () => {
  const { ward: biodata } = useGetStudentById("biodata");
  const [data, setData] = useState();

  const firstName = data?.firstName;
  const lastName = data?.lastName;
  const middleName = data?.middleName;

  useEffect(() => {
    if (biodata) {
      setData(biodata);
    }
  }, [biodata]);

  return (
    <div className="font-poppins px-10 text-gray-400 mt-10">
      <header>
        <h1>Required Documents</h1>
      </header>
    </div>
  );
};

export default StudentDocs;
