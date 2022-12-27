export const sideBarMenuItems = [
  {
    label: "dashboard",
    defaultOpen: false,
    icon: (
      <span className="material-symbols-outlined submenuIcon">
        dashboard_customize
      </span>
    ),
    subMenus: [
      { label: "default", link: "/dashboard" },
      { label: "analytics", link: "/analytics" },
    ],
  },
  {
    label: "students",
    defaultOpen: true,
    icon: <span className="material-symbols-outlined submenuIcon">group</span>,
    subMenus: [
      { label: "all students", link: "/students" },
      { label: "add student", link: "students/add-student/biodata" },
      { label: "results", link: "students/results" },
    ],
  },
  {
    label: "departments",
    defaultOpen: false,
    icon: <span className="material-symbols-outlined submenuIcon">school</span>,
    subMenus: [
      { label: "sciences", link: "sciences" },
      { label: "social sciences", link: "social sciences" },
      { label: "art", link: "art" },
    ],
  },
];
