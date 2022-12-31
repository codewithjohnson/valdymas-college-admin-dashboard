import React from "react";

const SelectInput = ({ register, inputName, arrayToLoop, classname }) => {
  return (
    <select
      name={inputName}
      id={inputName}
      className={classname}
      {...register(inputName)}
      key={inputName}
    >
      <option value="select" className="font-poppins ">
        select
      </option>
      {arrayToLoop?.map((state, index) => {
        return (
          <option key={index} value={state} className="font-poppins">
            {state}
          </option>
        );
      })}
    </select>
  );
};

export default SelectInput;
