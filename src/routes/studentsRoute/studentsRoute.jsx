import Loadable from "../../components/loadable/Loadable";
import { lazy } from "react";

// import from students
const Students = Loadable(lazy(() => import("../../pages/views/students/Students")));
const AllStudents = Loadable(lazy(() => import("../../pages/views/allStudents/AllStudents")));

// import departments
const Departments = Loadable(lazy(() => import("../../layout/departments/departmentLayout")));
const Sciences = Loadable(lazy(() => import("../../pages/views/departments/sciences/Sciences")));
const Arts = Loadable(lazy(() => import("../../pages/views/departments/arts/Arts")));
const SocialSciences = Loadable(
  lazy(() => import("../../pages/views/departments/social-sciences/SocialSciences"))
);

// import from new student folder
const NewStudent = Loadable(lazy(() => import("../../pages/views/newStudent/NewStudent")));
const Biodata = Loadable(lazy(() => import("../../pages/views/newStudent/biodata/Biodata")));
const Programme = Loadable(lazy(() => import("../../pages/views/newStudent/programme/Programme")));
const Olevels = Loadable(lazy(() => import("../../pages/views/newStudent/Olevels/Olevels")));
const UploadPage = Loadable(lazy(() => import("../../pages/views/newStudent/upload/Upload")));

export const studentsRoute = {
  path: "students",
  element: <Students />,
  outlet: true,
  children: [
    {
      path: "/students",
      element: <AllStudents />,
    },

    {
      path: "departments",
      element: <Departments />,
      children: [
        {
          path: "sciences",
          element: <Sciences />,
        },
        {
          path: "arts",
          element: <Arts />,
        },
        {
          path: "social-sciences",
          element: <SocialSciences />,
        },
      ],
    },

    {
      path: "add-student",
      element: <NewStudent />,
      children: [
        {
          path: "biodata",
          element: <Biodata />,
        },
        {
          path: "upload",
          element: <UploadPage />,
        },
        {
          path: "programme",
          element: <Programme />,
        },
        {
          path: "olevels",
          element: <Olevels />,
        },
      ],
    },
  ],
};
