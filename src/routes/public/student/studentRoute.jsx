import { lazy } from "react";
import Loadable from "../../../components/loadable/Loadable";
const StudentLayout = Loadable(
  lazy(() => import("../../../layout/publicLayout/student/studentLayout"))
);
const Student = Loadable(lazy(() => import("../../../pages/views/public/student/Student")));
const StudentDocs = Loadable(lazy(() => import("../../../pages/views/public/documents/Documents")));

export const studentRoute = {
  path: "/student/:studentID",
  element: <StudentLayout />,
  children: [
    {
      path: "",
      element: <Student />,
    },
    {
      path: "documents",
      element: <StudentDocs />,
    },
  ],
};
