import { Outlet } from "react-router-dom";
import LoaderFull from "./components/loaderFull";
import useOnlineStatus from "./hooks/useOnlineStatus";
import OnlineViewer from "./components/onlineNotify";

// hooks
import { useRedirectAdminStudent } from "./hooks/redirectAdmin";
import { useIsAdmin } from "./hooks/useAdmin";

// layout
import MainLayout from "./layout/mainLayout";

const App = () => {
  const isAdmin = useIsAdmin();
  const online = useOnlineStatus();

  // redirect admin and student
  useRedirectAdminStudent();

  return isAdmin ? (
    <MainLayout>
      {!online ? <OnlineViewer /> : null}
      <Outlet />
    </MainLayout>
  ) : (
    <LoaderFull />
  );
};

export default App;
