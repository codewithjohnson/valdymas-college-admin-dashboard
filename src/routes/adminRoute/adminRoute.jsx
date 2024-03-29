import { lazy } from "react";
import Loadable from "../../components/Loadable/Loadable";

// admin pages
const AdminLayout = Loadable(
  lazy(() => import("../../layout/adminLayout/adminLayout"))
);
const NewAdmin = Loadable(
  lazy(() => import("../../pages/views/admins/newAdmin/NewAdmin"))
);
const AllAdmins = Loadable(
  lazy(() => import("../../pages/views/admins/allAdmins/AllAdmins"))
);
const ChangePassword = Loadable(
  lazy(() => import("../../pages/views/admins/changePwd/ChangePwd"))
);
const UpdateAdminProfile = Loadable(
  lazy(() =>
    import("../../pages/views/admins/updateProfile/UpdateAdminProfile")
  )
);

const AdminProfile = Loadable(
  lazy(() => import("../../pages/views/admins/adminProfile/AdminProfile"))
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
    {
      path: "admin",
      element: <UpdateAdminProfile />,
      children: [
        {
          path: "profile",
          element: <AdminProfile />,
        },
        {
          path: "password",
          element: <ChangePassword />,
        },
      ],
    },
  ],
};
