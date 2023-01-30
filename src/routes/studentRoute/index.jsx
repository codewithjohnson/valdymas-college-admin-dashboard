import Loadable from "../../components/loadable";
import { lazy } from "react";

// import from students
const Students = Loadable(lazy(() => import("../../pages/views/students")));
const AllStudents = Loadable(lazy(() => import("../../pages/views/allStudents")));

// import departments
const Departments = Loadable(lazy(() => import("../../layout/departments")));
const Sciences = Loadable(lazy(() => import("../../pages/views/departments/sciences")));
const Arts = Loadable(lazy(() => import("../../pages/views/departments/arts")));
const SocialSciences = Loadable(
  lazy(() => import("../../pages/views/departments/social-sciences"))
);

// import from new student folder
const NewStudent = Loadable(lazy(() => import("../../pages/views/newStudent")));
const Biodata = Loadable(lazy(() => import("../../pages/views/newStudent/biodata")));
const Programme = Loadable(lazy(() => import("../../pages/views/newStudent/programme")));
const Olevels = Loadable(lazy(() => import("../../pages/views/newStudent/Olevels")));
const Student = Loadable(lazy(() => import("../../pages/views/student")));
const UploadPage = Loadable(lazy(() => import("../../pages/views/newStudent/upload")));

export const studentRoute = {
  path: "students",
  element: <Students />,
  outlet: true,
  children: [
    {
      path: "/students",
      element: <AllStudents />,
    },
    {
      path: "student/:studentID",
      element: <Student />,
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
