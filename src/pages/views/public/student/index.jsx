import { useIsAuthorized } from "../../../../hooks/useAuth";

// components
import ProfilePic from "../../../../components/public/student/profile";
import Biodata from "../../../../components/public/student/biodata";
import Olevels from "../../../../components/public/student/olevels";
import Programme from "../../../../components/public/student/programme";

const Student = () => {
  // check if user is authorized
  useIsAuthorized();

  return (
    <div className=" text-gray-200 font-poppins px-5 sm:px-10 h-full w-full">
      <div className="studentPageGridMobile sm:studentPageGrid gap-x-5 gap-y-5">
        {/* <ProfilePic  /> */}
        <Biodata />
        {/* <Olevels  /> */}
        {/* <Programme  /> */}
      </div>
    </div>
  );
};
export default Student;
