import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/auth/auth";
import { findStudent } from "../services/firestore/students/students";

export const useRedirectAdminStudent = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const yearRange = "2022-2023";

  // admin login
  const loginAdmin = async () => {
    const nextRoute = "/dashboard ";
    navigate(nextRoute);
  };

  // student login
  const loginStudent = async (userID) => {
    const isStudent = await findStudent(yearRange, userID);
    const studentID = isStudent;
    const nextRoute = `/student/${studentID}`;
    navigate(nextRoute);
  };

  useEffect(() => {
    const checkAdmin = async () => {
      if (!loading && user) {
        user.getIdTokenResult().then((idTokenResult) => {
          const role = idTokenResult.claims.role;
          if (role === "admin") {
            loginAdmin();
          } else if (role === "student") {
            loginStudent(user.uid);
          }
        });
      } else {
        navigate("/auth/login");
      }
    };
    checkAdmin();
  }, [user]);
};
