import { lazy } from "react";
import Loadable from "../../components/Loadable";
const AdminLayout = Loadable(lazy(() => import("../../layout/adminLayout")));
const NewAdmin = Loadable(
  lazy(() => import("../../pages/views/admins/newAdmin"))
);
const AllAdmins = Loadable(
  lazy(() => import("../../pages/views/admins/allAdmins"))
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
  ],
};
