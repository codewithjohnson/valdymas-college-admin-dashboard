import { useEffect, useState } from "react";
import { useAuth } from "../services/auth/auth";
import { checkAdminExists } from "../services/firestore/students/students";

export const useIsAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  // Todo: get this from local storage: year range
  const yearRange = "2022-2023";
  const { user, loading } = useAuth();

  useEffect(() => {
    const checkAdmin = async () => {
      if (!loading && user) {
        const admin = await checkAdminExists(yearRange, user?.uid);
        setIsAdmin(admin);
      }
    };
    checkAdmin();
  }, [user, loading]);

  return { isAdmin };
};
