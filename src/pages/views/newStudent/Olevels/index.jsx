// Components
import OlevelForm from "../../../../components/forms/olevels";

const Olevels = () => {
  return (
    <div className="p-5 pb-8 font-poppins">
      <h3 className="p-3  flex justify-center  items-center pb-5 text-sm text-green-900 capitalize bg-green-100 rounded-md w-max">
        O'levels grading
      </h3>
      <OlevelForm />
    </div>
  );
};

export default Olevels;
