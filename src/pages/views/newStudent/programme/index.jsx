import React from "react";
import ProgrammeForm from "../../../../components/forms/programme";

const Programme = () => {
  return (
    <div className="p-5 pb-8 font-poppins w-full h-full">
      <header className="flex justify-between items-center">
        <h3 className="p-3 pb-5 text-sm text-green-900 capitalize bg-green-100 rounded-md w-max select-none ">
          programme mode
        </h3>
        <p className="capitalize text-sm sm:text-base text-green-800 font-semibold select-none">
          step 3 <span>/</span> <span className="text-red-800">3</span>
        </p>
      </header>
      <ProgrammeForm />
    </div>
  );
};

export default Programme;
