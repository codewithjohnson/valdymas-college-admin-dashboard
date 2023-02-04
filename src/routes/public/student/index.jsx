import { lazy } from "react";
import Loadable from "../../../components/loadable";
const StudentLayout = Loadable(
  lazy(() => import("../../../layout/publicLayout/student"))
);
const Student = Loadable(lazy(() => import("../../../pages/views/public/student")));


export const studentRoute = {
  path: "/student/:studentID",
  element: <StudentLayout />,
  children: [
    {
      path: "",
      element: <Student />,
    },
  ],
};
