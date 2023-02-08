import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/auth/auth";

export const useIsAuthorized = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // redirect to login page if user is not verified
  useEffect(() => {
    if (!loading && !user) {
      console.log("user is not verified");
      navigate("/auth/login");
    }
  }, [user]);
};
