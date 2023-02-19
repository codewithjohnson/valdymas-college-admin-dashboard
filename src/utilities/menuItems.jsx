export const sideBarMenuItems = [
  {
    id: 1,
    label: "dashboard",
    defaultOpen: true,
    icon: (
      <span className="material-symbols-outlined submenuIcon">dashboard_customize</span>
    ),
    subMenus: [
      { id: 1, label: "default", link: "/dashboard" },
      { id: 2, label: "analytics", link: "/analytics" },
    ],
  },
  {
    id: 2,
    label: "students",
    defaultOpen: true,
    icon: <span className="material-symbols-outlined submenuIcon">group</span>,
    subMenus: [
      { id: 1, label: "all students", link: "/students" },
      { id: 2, label: "add student", link: "students/add-student/biodata" },
      { id: 3, label: "results", link: "/" },
    ],
  },
  {
    id: 3,
    label: "departments",
    defaultOpen: true,
    icon: <span className="material-symbols-outlined submenuIcon">school</span>,
    subMenus: [
      { id: 1, label: "sciences", link: "/students/departments/sciences" },
      { id: 2, label: "social sciences", link: "/students/departments/social-sciences" },
      { id: 3, label: "art", link: "/students/departments/arts" },
    ],
  },
  
];
