import Loadable from "../../components/loadable";
import { lazy } from "react";

const Students = Loadable(lazy(() => import("../../pages/views/students")));
const AllStudents = Loadable(
  lazy(() => import("../../pages/views/allStudents"))
);

// import from new student folder
const NewStudent = Loadable(lazy(() => import("../../pages/views/newStudent")));
const Biodata = Loadable(
  lazy(() => import("../../pages/views/newStudent/biodata"))
);
const Programme = Loadable(
  lazy(import("../../pages/views/newStudent/programme"))
);

export const studentRoute = {
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
      children: [
        {
          path: "biodata",
          element: <Biodata />,
        },
      ],
    },
  ],
};
