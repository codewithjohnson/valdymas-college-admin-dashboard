import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/auth/auth";
import { findStudent } from "../services/firestore/students/students";
import { loginAdmin, loginStudent } from "../utilities/auth/navigate";

export const useRedirectAdminStudent = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const yearRange = "2022-2023";

  useEffect(() => {
    const checkAdmin = async () => {
      if (!loading && user) {
        user.getIdTokenResult().then((idTokenResult) => {
          const role = idTokenResult.claims.role;
          if (role === "admin") {
            loginAdmin(navigate);
          } else if (role === "student") {
            loginStudent(user.uid, navigate, findStudent);
          }
        });
      } else {
        navigate("/auth");
      }
    };
    checkAdmin();
  }, [user]);
};
