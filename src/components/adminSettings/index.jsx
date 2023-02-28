import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../services/auth/auth";

const AdminSettings = () => {
  const { HandleSignOut } = useAuth();

  return (
    <div className="bg-white rounded-lg text-gray-600  h-full font-poppins py-4 border-b-2 border-b-green-300 px-3">
      <main className="w-full h-full">
        <Link to="/admins/newPassword" className="flex py-3 flex-row items-center gap-5 px-3  mb-4 bg-green-50 hover:text-green-700 hover:bg-green-100">
          {/* password change */}
          <span className="material-symbols-outlined text-green-700 text-[18px]">
            lock
          </span>
          <p className="capitalize text-green-800 text-[13px]">
            change password
          </p>
        </Link>

        {/* developer */}
        <a
          href="mailto:muyiwamighty@gmail.com"
          className="flex flex-row items-center gap-5 py-3 px-3 hover:text-yellow-800 bg-yellow-50 hover:bg-yellow-100 mb-4"
        >
          <span className="material-symbols-outlined text-yellow-700 text-[18px] ">
            contact_mail
          </span>
          <p className="capitalize text-gray-600 text-[13px] hover:text-yellow-800">
            contact developer
          </p>
        </a>

        {/* logout */}
        <Link
          onClick={() => HandleSignOut()}
          className="logout flex flex-row items-center gap-5 py-3 px-3 bg-red-50 hover:text-red-700  hover:bg-red-100 mb-4"
        >
          <span className="material-symbols-outlined text-gray-500 text-[18px]">
            logout
          </span>
          <p className="text-[13px] capitalize text-red-800">logout</p>
        </Link>
      </main>
    </div>
  );
};

export default AdminSettings;
