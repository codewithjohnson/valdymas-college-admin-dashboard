import { memo } from "react";
import { useIsAdmin } from "../../../../hooks/useAdmin";

const ProfilePic = memo(({ student }) => {
  const { isAdmin, loading } = useIsAdmin();
  const studentSchoolID = student?.[4]?.studentSchoolID;
  const firstName = student?.[0]?.firstname;
  const lastName = student?.[0]?.lastname;
  const fullName = `${firstName} ${lastName}`;
  const programme = student?.[3]?.modeOfEntry;
  const agent = student?.[3]?.agent;
  const department = student?.[3]?.department;
  const passport = student?.[1]?.passport?.data;

  return (
    <div className="profile__picture h-fit bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl divide-y divide-slate-700 shadow-2xl">
      <div className="pic p-10 pb-1">
        <img
          src={passport}
          alt="avatar"
          className="rounded-full border-4 border-slate-400"
        />
        <h1 className="text-lg sm:text-2xl text-gray-400 font-medium text-center capitalize mt-1 select-none ">
          {fullName}
        </h1>
      </div>

      <div className="info mt-3 flex flex-col justify-center items-center pb-4 select-none">
        <h1 className="text-sm sm:text-base text-gray-400 capitalize py-1 ">
          department: <span className="normal-case"> {department}</span>{" "}
        </h1>
        <h1 className="text-sm sm:text-base text-gray-400 capitalize py-1">
          ID: <span className="normal-case"> {studentSchoolID}</span>{" "}
        </h1>
        <h1 className="text-sm sm:text-base text-gray-400 capitalize py-1">
          programme: <span className="normal-case"> {programme}</span>
        </h1>
        {isAdmin && (
          <h1 className="text-sm sm:text-base text-amber-600 capitalize py-1 ">
            agent: <span className="capitalize"> {agent}</span>{" "}
          </h1>
        )}
      </div>
    </div>
  );
});

export default ProfilePic;
