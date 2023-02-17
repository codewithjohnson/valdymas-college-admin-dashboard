import { useNavigate } from "react-router-dom";
import { getServices } from "../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
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
        return "Invalid login details";
      }
    });
  };

  // Login the user
  const login = async (level, email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        verifyLogin(level, user, navigate);
      }
    } catch (error) {
      return error;
    }
  };

  return { login };
};
