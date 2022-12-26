import React from "react";
import ReactDOM from "react-dom/client";
import { authRoute, mainRoute } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./services/auth/auth";
import { ProSidebarProvider } from "react-pro-sidebar";

const router = createBrowserRouter([authRoute, mainRoute]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ProSidebarProvider>
        <RouterProvider router={router} />
      </ProSidebarProvider>
    </AuthProvider>
  </React.StrictMode>
);
