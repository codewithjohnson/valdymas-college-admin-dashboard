import React from "react";
import AdminCard from "../../../../components/admin";

// fake data
const adminData = [
  {
    id: 1,
    name: "Muyiwa Johnson",
    email: "muyiwamighty@gmail.com",
    phone: "08123456789",
    role: "HOD IT",
    status: "active",
    department: "IT",
    location: "Lagos",
  },
  {
    id: 2,
    name: "James Johnson",
    email: "james@gmail.com",
    phone: "08123456789",
    role: "HOD Sciences",
    status: "active",
    department: "Isciences",
    location: "Akure",
  },
];



const Admins = () => {
  return (
    <div className="font-poppins">
      <div className="flex flex-col sm:flex sm:flex-row gap-5 p-3">
        {adminData.map((admin) => {
          return <AdminCard admin={admin} />;
        })}
      </div>
    </div>
  );
};

export default Admins;
