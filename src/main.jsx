import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//  routes
import { authRoute, mainRoute } from "./routes";
import { studentRoute } from "./routes/public/student";

//  services
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./services/auth/auth";

//  components
import { ProSidebarProvider } from "react-pro-sidebar";

//  context
import { StudentContextProvider } from "./context/students";

const router = createBrowserRouter([authRoute, mainRoute, studentRoute]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <StudentContextProvider>
        <ProSidebarProvider>
          <RouterProvider router={router} />
        </ProSidebarProvider>
      </StudentContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
