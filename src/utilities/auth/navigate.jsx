// admin login
export const loginAdmin = async (navigate) => {
  const nextRoute = "/dashboard ";
  navigate(nextRoute);
};

// student login
export const loginStudent = async (userID, navigate, findStudent) => {
  const isStudent = await findStudent(yearRange, userID);
  const studentID = isStudent;
  const nextRoute = `/student/${studentID}`;
  navigate(nextRoute);
};
