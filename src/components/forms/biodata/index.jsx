import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, boolean } from "yup";
import { nigeriaStates, nigeriaLgas } from "../../../utilities/nigeria";

const BiodataForm = () => {
  const schema = object({
    firstname: string().required("First name is required"),
    lastname: string().required("Last name is required"),
    middlename: string().required("Middle name is required"),
    email: string().email().required("Email is required"),
    phoneNumber: string().required("Phone number is required"),
    nationality: string().required("Nationality is required"),
    gender: string().required("Gender is required"),
    stateOfOrigin: string().required("State is required"),
    contactAddress: string().required("Address is required"),
    religion: string().required("Religion is required"),
    maritalstatus: string().required("Marital status is required"),
    lga: string().required("LGA is required"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // watch the state value to determine LGA value for the particular state
  const watchState = watch("stateOfOrigin");
  const stateLgas = nigeriaLgas[watchState];

  const onBiodataFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-5 pb-8 font-poppins">
      <h3 className="p-3 pb-5 text-sm text-green-900 capitalize bg-green-100 rounded-md w-max">
        Biodata(personal information)
      </h3>
      <form
        onSubmit={handleSubmit(onBiodataFormSubmit)}
        className="grid w-full h-full grid-cols-1 mt-5 gap-x-6 gap-y-7 g md:grid-cols-2 lg:grid-cols-3"
      >
        {/* FIRST NAME */}
        <div className="firstname">
          <label
            htmlFor="firstname"
            className="text-gray-600 text-[15px] capitalize"
          >
            First Name
          </label>
          <input
            type="text"
            required
            placeholder="First Name "
            name="firstname"
            id="firstname"
            {...register("firstname")}
            className="studentInputClass"
          />
          {errors?.firstname && (
            <span className="text-[11px] text-red-900">
              {errors?.firstname}
            </span>
          )}
        </div>

        {/* LAST NAME */}
        <div className="lastname">
          <label
            htmlFor="lastname"
            className="text-gray-600 text-[15px] capitalize"
          >
            Last Name
          </label>
          <input
            type="text"
            required
            placeholder="Last Name "
            name="lastname"
            {...register("lastname")}
            id="lastname"
            className="studentInputClass"
          />
          {errors?.lastname && (
            <span className="text-[11px] text-red-900">{errors?.lastname}</span>
          )}
        </div>

        {/* MIDDLE NAME */}
        <div className="middlename">
          <label
            htmlFor="middlename"
            className="text-gray-600 text-[15px] capitalize"
          >
            Middle Name
          </label>
          <input
            type="text"
            placeholder="Middle Name "
            name="middlename"
            id="middlename"
            {...register("middlename")}
            className="studentInputClass"
          />
          {errors?.middlename && (
            <span className="text-[11px] text-red-900">
              {errors?.middlename}
            </span>
          )}
        </div>

        {/* EMAIL  */}
        <div className="email">
          <label
            htmlFor="email"
            className="text-gray-600 text-[15px] capitalize"
          >
            Email
          </label>
          <input
            type="email"
            required
            placeholder="example@gmail.com"
            name="email"
            {...register("email")}
            id="email"
            className="studentInputClass"
          />
          {errors?.email && (
            <span className="text-[11px] text-red-900">{errors?.email}</span>
          )}
        </div>

        {/* PHONE NUMBER */}
        <div className="phoneNumber">
          <label
            htmlFor="phoneNumber"
            className="text-gray-600 text-[15px] capitalize"
          >
            contact number
          </label>
          <input
            type="number"
            placeholder="+234 000 000 00"
            name="phoneNumber"
            id="phoneNumber"
            {...register("phoneNumber")}
            className="studentInputClass"
          />
          {errors?.phonenumber && (
            <span className="text-[11px] text-red-900">
              {errors?.phonenumber}
            </span>
          )}
        </div>

        {/* GENDER SELECT ELEMENT */}
        <div className="gender">
          <label
            htmlFor="gender"
            className="text-gray-600 text-[15px] capitalize"
          >
            gender
          </label>
          <select
            name="gender"
            id="gender"
            className="cursor-pointer studentInputClass"
            {...register("gender")}
          >
            <option value="" className="font-poppins">
              select
            </option>
            <option value="female" className="font-poppins">
              female
            </option>
            <option value="male" className="font-poppins">
              male
            </option>
          </select>
        </div>

        {/* CONTACT ADDRESS */}
        <div className="col-span-2 contactaddress">
          <label
            htmlFor="contactAddress"
            className="text-gray-600 text-[15px] capitalize"
          >
            contact address
          </label>
          <input
            type="text"
            placeholder="Enter Address"
            name="contactAddress"
            {...register("contactAddress")}
            id="contactAddress"
            className="studentInputClass"
          />
          {errors?.contactAddress && (
            <span className="text-[11px] text-red-900">
              {errors?.contactAddress}
            </span>
          )}
        </div>

        {/* RELIGION SELECT ELEMENT */}
        <div className="religion">
          <label
            htmlFor="religion"
            className="text-gray-600 text-[15px] capitalize"
          >
            religion
          </label>
          <select
            name="religion"
            id="religion"
            {...register("religion")}
            className="cursor-pointer studentInputClass"
          >
            <option value="" className="font-poppins">
              select
            </option>
            <option value="christainity" className="font-poppins">
              christainity
            </option>
            <option value="islam" className="font-poppins">
              islam
            </option>
            <option value="others" className="font-poppins">
              others
            </option>
          </select>
        </div>

        {/* NATIONALITY SELECT ELEMENT */}
        <div className="nationality">
          <label
            htmlFor="nationality"
            className="text-gray-600 text-[15px] capitalize"
          >
            nationality
          </label>
          <select
            name="nationality"
            id="nationality"
            {...register("nationality")}
            className="cursor-pointer studentInputClass"
          >
            <option value="" className="font-poppins">
              select
            </option>
            <option value="Nigerian" className="font-poppins">
              Nigerian
            </option>
            <option value="others" className="font-poppins">
              others
            </option>
          </select>
        </div>

        {/* MARITAL STATUS SELECT ELEMENT */}
        <div className="maritalStatus">
          <label
            htmlFor="maritalStatus"
            className="text-gray-600 text-[15px] capitalize"
          >
            marital status
          </label>
          <select
            name="maritalStatus"
            id="maritalStatus"
            className="cursor-pointer studentInputClass"
          >
            <option value="" className="font-poppins">
              select
            </option>
            <option value="Nigerian" className="font-poppins">
              single
            </option>
            <option value="others" className="font-poppins">
              married
            </option>
          </select>
        </div>

        {/* STATE OF ORIGIN SELECT ELEMENT */}
        <div className="stateOfOrigin">
          <label
            htmlFor="stateOfOrigin"
            className="text-gray-600 text-[15px] capitalize"
          >
            state of origin
          </label>
          <select
            name="stateOfOrigin"
            id="stateOfOrigin"
            className="cursor-pointer studentInputClass"
            {...register("stateOfOrigin")}
          >
            {nigeriaStates?.map((state, index) => {
              return (
                <option key={index} value={state} className="font-poppins">
                  {state}
                </option>
              );
            })}
          </select>
        </div>

        {/* LGA OF ORIGIN SELECT */}
        <div className="lga">
          <label htmlFor="lga" className="text-gray-600 text-[15px]">
            LGA
          </label>
          <select
            name="lga"
            id="lga"
            className="cursor-pointer studentInputClass"
            {...register("lga")}
          >
            {watchState &&
              stateLgas?.map((lga, index) => {
                return (
                  <option key={index} value={lga} className="font-poppins">
                    {lga}
                  </option>
                );
              })}
          </select>
        </div>
        <button
          type="submit"
          className="bg-[#1E88E5] px-4 py-3 capitalize rounded-md text-white col-start-4  col-end-3 row-end-7  place-self-end cursor-pointer shadow-lg "
        >
          next page
        </button>
      </form>
    </div>
  );
};

export default BiodataForm;
