import React from "react";

const NewAdmin = () => {
  return (
    <div className="h-full  w-full">
      <header className="flex justify-between items-center mt-5 p-3">
        <h3 className="p-3 text-sm text-green-900 capitalize bg-green-100 rounded-md w-max select-none font-medium">
          new admininstrator
        </h3>
        <p className="capitalize text-sm  text-green-800 font-semibold select-none p-3">
          valdymas college
        </p>
      </header>

      <form className="p-3 bg-white flex flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-5">
        {/* Name */}
        <div className="name">
          <label
            htmlFor="name"
            className="text-gray-600 text-[15px] capitalize"
          >
            name
          </label>

          <input
            name="name"
            id="name"
            placeholder="kolawole joshua"
            type="text"
            className="studentInputClass"
          />
        </div>

        {/* email */}
        <div className="email">
          <label
            htmlFor="email"
            className="text-gray-600 text-[15px] capitalize"
          >
            email
          </label>

          <input
            name="email"
            id="email"
            placeholder="example@gmail.com"
            type="email"
            className="studentInputClass"
          />
        </div>

        {/* phone */}
        <div className="phone">
          <label
            htmlFor="phone"
            className="text-gray-600 text-[15px] capitalize"
          >
            phone
          </label>
          <input
            type="text"
            placeholder="+234 000 000 00"
            name="phoneNumber"
            id="phoneNumber"
            className="studentInputClass"
          />
        </div>

        {/* department */}
        <div className="department">
          <label
            htmlFor="department"
            className="text-gray-600 text-[15px] capitalize"
          >
            department
          </label>
          <input
            type="text"
            name="department"
            id="department"
            placeholder="e.g arts"
            className="studentInputClass"
          />
        </div>

        {/* role */}
        <div className="role">
          <label
            htmlFor="role"
            className="text-gray-600 text-[15px] capitalize"
          >
            role
          </label>
          <input
            type="text"
            name="role"
            placeholder="e.g HOD arts"
            id="role"
            className="studentInputClass"
          />
        </div>

        {/* location */}
        <div className="role">
          <label
            htmlFor="location"
            className="text-gray-600 text-[15px] capitalize"
          >
            location
          </label>
          <input
            type="text"
            placeholder="e.g lagos"
            name="location"
            id="location"
            className="studentInputClass"
          />
        </div>

        <div className="buttons w-full col-end-4 flex justify-end">
          <button
            type="submit"
            className="bg-green-900 px-5 py-4 capitalize rounded-md text-white  cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out  "
          >
            create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewAdmin;
