import { lazy } from "react";
import Loadable from "../../../components/loadable";
const Student = Loadable(lazy(() => import("../../../pages/views/public/student")));

export const studentRoute = {
  path: "/student/:studentID",
  element: <Student />,
  children: [],
};
