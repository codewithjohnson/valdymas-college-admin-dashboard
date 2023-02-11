import { Outlet } from "react-router-dom";
import LoaderFull from "./components/loaderFull";

// services
import { useAuth } from "./services/auth/auth";

// hooks
import { useRedirectAdminStudent } from "./hooks/redirectAdmin";

// layout
import MainLayout from "./layout/mainLayout";

const App = () => {
  const { user, loading } = useAuth();

  // redirect admin and student
  useRedirectAdminStudent();

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default App;
