import { lazy } from "react";
import Loadable from "../../components/loadable/";
import { studentRoute } from "../studentRoute";

const App = Loadable(lazy(() => import("../../App")));
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
