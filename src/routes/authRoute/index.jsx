import { lazy } from "react";
import Loadable from "../../components/loadable/";

const AuthLayout = Loadable(lazy(() => import("../../layout/authLayout")));
const Login = Loadable(lazy(() => import("../../pages/auth/login")));

export const authRoute = {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    {
      path: "/auth",
      element: <Login />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ],
};
