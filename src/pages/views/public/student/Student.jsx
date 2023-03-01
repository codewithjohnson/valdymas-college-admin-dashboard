import { useIsAuthorized } from "../../../../hooks/useAuth";

// components
import ProfilePic from "../../../../components/public/student/profile/Profile";
import Biodata from "../../../../components/public/student/biodata/Biodata";
import Olevels from "../../../../components/public/student/olevels/Olevels";
import Programme from "../../../../components/public/student/programme/Programme";

const Student = () => {
  // check if user is authorized
  useIsAuthorized();

  return (
    <div className=" text-gray-200 font-poppins px-5 sm:px-10 h-full w-full">
      <div className="studentPageGridMobile sm:studentPageGrid gap-x-5 gap-y-5">
        <ProfilePic  />
        <Biodata />
        <Olevels  />
        <Programme  />
      </div>
    </div>
  );
};
export default Student;
