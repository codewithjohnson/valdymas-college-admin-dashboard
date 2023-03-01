import { lazy } from "react";
import Loadable from "../../components/loadable/Loadable";

const AuthLayout = Loadable(lazy(() => import("../../layout/authLayout/authLayout")));
const Login = Loadable(lazy(() => import("../../pages/auth/login/Login")));

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
