import { memo, useEffect, useState } from "react";

const ProfilePic = memo(({ student }) => {

  const firstName = student?.[0]?.firstname;
  const lastName = student?.[0]?.lastname;
  const fullName = `${firstName} ${lastName}`;
  const programme = student?.[3]?.modeOfEntry;
  const department = student?.[3]?.department;
  const passport = student?.[1]?.passport?.data;

  return (
    <div className="profile__picture p-5">
      <div className="pic">
        <img src={passport} alt="avatar" className="rounded-full border-4 border-slate-200 " />
      </div>
    </div>
  );
});

export default ProfilePic;
