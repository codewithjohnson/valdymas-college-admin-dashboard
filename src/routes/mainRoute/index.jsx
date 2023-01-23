import { lazy } from "react";
import Loadable from "../../components/loadable/";
import { studentRoute } from "../studentRoute";
import ErrorPage from "../../pages/views/errorPage/ErrorPage";
const App = Loadable(lazy(() => import("../../App")));
const Dashboard = Loadable(lazy(() => import("../../pages/views/dashboard")));
export const mainRoute = {
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    studentRoute,
  ],
};
