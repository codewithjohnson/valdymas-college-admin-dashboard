import { lazy } from "react";
import Loadable from "../../components/loadable/Loadable";
import { studentsRoute } from "../studentsRoute/studentsRoute";
import { adminRoute } from "../adminRoute/adminRoute";

import App from "../../App";
const Dashboard = Loadable(lazy(() => import("../../pages/views/dashboard/Dashboard")));
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
    studentsRoute,
    adminRoute,
  ],
};
