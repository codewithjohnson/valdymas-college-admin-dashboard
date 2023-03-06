import { useEffect, useState } from "react";
import { useAuth } from "../services/auth/auth";


export const useIsAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, loading } = useAuth();

  useEffect(() => {
    const checkAdmin = async () => {
      if (!loading && user) {
        user.getIdTokenResult().then((idTokenResult) => {
          const role = idTokenResult.claims.role;
          if (role === "admin") {
            setIsAdmin(true);
          }
        });
      }
    };
    checkAdmin();
  }, [user]);

  return { isAdmin: true };
};
