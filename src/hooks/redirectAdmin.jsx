import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/auth/auth";

export const useRedirectAdminStudent = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      if (!loading && user) {
        user.getIdTokenResult().then((idTokenResult) => {
          const role = idTokenResult.claims.role;
          if (role === "admin") {
            navigate("/dashboard");
          } else if (role === "student") {
            navigate(`/student/${user.uid}`);
          }
        });
      } else if (!loading && !user) {
        navigate("/auth");
      }
    };
    checkAdmin();
  }, [user, loading]);
};
