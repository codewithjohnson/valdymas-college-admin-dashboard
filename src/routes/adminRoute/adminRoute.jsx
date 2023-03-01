import { lazy } from "react";
import Loadable from "../../components/Loadable";

// admin pages
const AdminLayout = Loadable(lazy(() => import("../../layout/adminLayout")));
const NewAdmin = Loadable(
  lazy(() => import("../../pages/views/admins/newAdmin"))
);
const AllAdmins = Loadable(
  lazy(() => import("../../pages/views/admins/allAdmins"))
);
const ChangePassword = Loadable(
  lazy(() => import("../../pages/views/admins/changePwd"))
);

export const adminRoute = {
  path: "/admins",
  element: <AdminLayout />,
  children: [
    {
      path: "",
      element: <AllAdmins />,
    },
    { path: "new", element: <NewAdmin /> },
    { path: "newPassword", element: <ChangePassword /> },
  ],
};
