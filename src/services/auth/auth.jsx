// validate authentification
import { createContext, useContext, useState, useEffect } from "react";
import { getServices } from "../../services/firebase";
import { onAuthStateChanged } from "firebase/auth";

// create context
const AuthContext = createContext();

// create provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { auth } = getServices();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// create hook
export const useAuth = () => {
  return useContext(AuthContext);
};
