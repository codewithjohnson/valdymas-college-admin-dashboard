// Components
import { memo } from "react";
import OlevelForm from "../../../../components/forms/olevels";

const OlevelsPage = () => {
  return (
    <div className="p-5 pb-8 font-poppins">
      <header className="flex justify-between items-center">
        <h3 className="p-3 pb-5 text-sm text-green-900 capitalize bg-green-100 rounded-md w-max select-none ">
          O'levels grading
        </h3>
        <p className="capitalize text-sm sm:text-base text-green-800 font-semibold">
          step 2 <span>/</span> <span className="text-red-800">3</span>
        </p>
      </header>
      <OlevelForm />
    </div>
  );
};
const Olevels = memo(OlevelsPage);
export default Olevels;
