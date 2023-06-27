import { Outlet } from "react-router-dom";
import LoaderFull from "./components/loaderFull/LoaderFull";
import useOnlineStatus from "./hooks/useOnlineStatus";
import OnlineViewer from "./components/onlineNotify/OnlineNotifyer";

// hooks
import { useRedirectAdminStudent } from "./hooks/redirectAdmin";
import { useIsAdmin } from "./hooks/useAdmin";

// layout
import MainLayout from "./layout/mainLayout/mainLayout";
import { useEffect } from "react";

const App = () => {
  const isAdmin = useIsAdmin();
  const online = useOnlineStatus();

  // clear local storage before onload
  useEffect(() => {
    const clearLocalStorage = () =>
      localStorage.removeItem("storedStudentData");

    window.addEventListener("beforeunload", clearLocalStorage);
    return () => window.removeEventListener("beforeunload", clearLocalStorage);
  }, []);

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
