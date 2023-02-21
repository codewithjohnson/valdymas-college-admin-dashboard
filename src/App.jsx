import { Outlet } from "react-router-dom";
import LoaderFull from "./components/loaderFull";

// hooks
import { useRedirectAdminStudent } from "./hooks/redirectAdmin";
import { useIsAdmin } from "./hooks/useAdmin";

// layout
import MainLayout from "./layout/mainLayout";

const App = () => {
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
