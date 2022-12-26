import { lazy } from "react";
import Loadable from "../../components/loadable/";

const App = Loadable(lazy(() => import("../../App")));
const Dashboard = Loadable(lazy(() => import("../../pages/views/dashboard")));
const DataPage = Loadable(lazy(() => import("../../pages/views/dataPage")));


export const mainRoute = {
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "datapage",
      element: <DataPage />,
    },
  ],
};
