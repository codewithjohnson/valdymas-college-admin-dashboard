// validate authentification
import { createContext, useContext, useState, useEffect } from "react";
import { getServices } from "../../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

// create context
const AuthContext = createContext();

// create provider
const useFirebaseAuth = () => {
  const { auth } = getServices();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const onStateChange = async (user) => {
    setLoading(true);
    if (!user) {
      setUser(null);
      setLoading(false);
      return;
    } else {
      setUser(user);
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, onStateChange);
    return () => unsubscribe();
  }, []);

  return { user, loading };
};

// auth provider
export const AuthProvider = ({ children }) => {
  const authParams = useFirebaseAuth();
  return <AuthContext.Provider value={authParams}>{children}</AuthContext.Provider>;
};

// create hook
export const useAuth = () => {
  const authParams = useContext(AuthContext);
  return authParams;
};
