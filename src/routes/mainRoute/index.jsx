import { lazy } from "react";
import Loadable from "../../components/loadable/";
import { studentRoute } from "../studentRoute";
import { adminRoute } from "../adminRoute/adminRoute";

import App from "../../layout/appLayout";
const Dashboard = Loadable(lazy(() => import("../../pages/views/dashboard")));
const ErrorPage = Loadable(
  lazy(() => import("../../pages/errorPage/Errorpage"))
);
export const mainRoute = {
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "",
      element: <Dashboard />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    studentRoute,
    adminRoute,
  ],
};
