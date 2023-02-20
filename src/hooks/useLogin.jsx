import { useNavigate } from "react-router-dom";
import { getServices } from "../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { auth } = getServices();

  // admin login
  const loginAdmin = async () => {
    const nextRoute = "/dashboard ";
    navigate(nextRoute);
  };

  // student login
  const loginStudent = async (userID) => {
    const nextRoute = `/student/${userID}`;
    navigate(nextRoute);
  };

  // verify login
  const verifyLogin = async (level, user) => {
    user.getIdTokenResult().then((idTokenResult) => {
      const role = idTokenResult.claims.role;
      if (level === "admin" && role === "admin") {
        loginAdmin();
      } else if (level === "student" && role === "student") {
        loginStudent(user.uid);
      } else {
        throw new Error("Invalid login credentials");
      }
    });
  };

  // handle errors
  const handleError = (errorCode) => {
    switch (errorCode) {
      case "auth/invalid-email":
        alert("Invalid email address");
        break;
      case "auth/user-disabled":
        alert("User account has been disabled");
        break;
      case "auth/user-not-found":
        alert("User account not found");
        break;
      case "auth/wrong-password":
        alert("Invalid password");
        break;
      default:
    }
  };

  // try login the user in and handle errors
  const login = async (level, email, password) => {
    setIsLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        setIsLoading(false);
        alert("Login successful");
        verifyLogin(level, user, navigate);
      }
    } catch (error) {
      setIsLoading(false);
      const errorCode = error.code;
      handleError(errorCode);
    }
  };

  return { login, isLoading };
};
