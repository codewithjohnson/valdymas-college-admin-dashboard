import { Outlet } from "react-router-dom";
import LoaderFull from "./components/loaderFull";

// services
import { useAuth } from "./services/auth/auth";

// hooks
import { useRedirectAdminStudent } from "./hooks/redirectAdmin";
import { useIsAdmin } from "./hooks/useAdmin";

// layout
import MainLayout from "./layout/mainLayout";

const App = () => {
  const { user, loading } = useAuth();
  const isAdmin = useIsAdmin();

  // redirect admin and student
  useRedirectAdminStudent();

  return isAdmin ? (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ) : (
    <LoaderFull />
  );
};

export default App;
