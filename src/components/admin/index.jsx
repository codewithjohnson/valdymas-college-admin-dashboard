import React from "react";

const AdminCard = ({ admin }) => {
  return (
    <div
      className={`admin-container w-[300px]  p-3 px-4 flex flex-col rounded-xl bg-gradient-to-tr from-gray-50 to-slate-100 border border-slate-200 `}
    >
      {/* image  */}
      <div className="image flex justify-start w-full">
        <img
          src="https://picsum.photos/220"
          alt=""
          className=" w-16 h-16 rounded-full border border-gray-400"
        />
      </div>

      {/* name */}
      <div className="name mt-7 ">
        <p className="text-sm sm:text-base font-bold text-gray-700">
          {admin.name}
        </p>
      </div>

      {/* role */}
      <div className="role">
        <p className="text-[12px] font-light  text-red-700">{admin.role}</p>
      </div>

      {/* email */}
      <div className="email mt-7 w-full">
        <h3 className="text-gray-500 text-[12px]">Email</h3>
        <p className="text-[12px] font-semibold text-gray-700">{admin.email}</p>
      </div>

      {/* phone and location */}
      <div className="data flex flex-row justify-between mt-7">
        {/* Phone */}
        <div className="phone w-full">
          <h3 className="text-gray-500 text-[12px]">Phone</h3>
          <p className="text-[12px] font-semibold text-gray-700">
            {admin.phone}
          </p>
        </div>

        {/* location */}
        <div className="location w-full">
          <h3 className="text-gray-500 text-[12px]">Location</h3>
          <p className="text-[12px] font-semibold text-gray-700">
            {admin.location}
          </p>
        </div>
      </div>

      {/* buttons */}
      <div className="buttons flex flex-row justify-between mt-10 w-full">
        {/* message */}
        <button className="flex w-[120px] flex-row  justify-center items-center py-3 gap-2 px-3 rounded-lg border border-purple-500 hover:bg-purple-50">
          <span className="material-symbols-outlined text-[20px] text-purple-700">
            mail
          </span>
          <p className="text-[13px] capitalize text-purple-500 font-semibold">
            message
          </p>
        </button>

        {/* call */}
        <button className="flex flex-row w-[120px] justify-center  items-center gap-2 py-3 px-3 rounded-lg border border-blue-500 hover:bg-blue-50">
          <span className="material-symbols-outlined text-[20px] text-blue-500">
            call
          </span>
          <p className="text-[13px] capitalize text-blue-500 font-semibold">
            call
          </p>
        </button>
      </div>
    </div>
  );
};

export default AdminCard;
