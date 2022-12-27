import { lazy } from "react";
import Loadable from "../../components/loadable/";

const App = Loadable(lazy(() => import("../../App")));
const Dashboard = Loadable(lazy(() => import("../../pages/views/dashboard")));
const Students = Loadable(lazy(() => import("../../pages/views/students")));
const NewStudent = Loadable(lazy(() => import("../../pages/views/newStudent")));
const AllStudents = Loadable(
  lazy(() => import("../../pages/views/allStudents"))
);

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
      path: "students",
      element: <Students />,
      children: [
        {
          path: "/students",
          element: <AllStudents />,
        },
        {
          path: "add-student",
          element: <NewStudent />,
        },
      ],
    },
  ],
};
