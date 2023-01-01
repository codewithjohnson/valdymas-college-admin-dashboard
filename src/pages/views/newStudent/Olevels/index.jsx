// Components
import { memo } from "react";
import OlevelForm from "../../../../components/forms/olevels";

const OlevelsPage = () => {
  return (
    <div className="p-5 pb-8 font-poppins">
      <h3 className="p-3  flex justify-center  items-center pb-5 text-sm text-green-900 capitalize bg-green-100 rounded-md w-max">
        O'levels grading
      </h3>
      <OlevelForm />
    </div>
  );
};
const Olevels = memo(OlevelsPage);
export default Olevels;
