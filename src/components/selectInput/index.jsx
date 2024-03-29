import React from "react";

const SelectInput = ({ register, inputName, arrayToLoop, classname }) => {
  return (
    <select
      name={inputName}
      id={inputName}
      className={classname}
      {...register(inputName)}
    >
      <option value="" className="font-poppins ">
        select
      </option>
      {arrayToLoop?.map((state) => {
        return (
          <option key={state.id} value={state.state} className="font-poppins">
            {state.state}
          </option>
        );
      })}
    </select>
  );
};

export default SelectInput;
