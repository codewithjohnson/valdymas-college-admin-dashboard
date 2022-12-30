import React from "react";
import ReactDOM from "react-dom/client";
import { authRoute, mainRoute } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./services/auth/auth";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Provider } from "react-redux";
import { store } from "./store";

const router = createBrowserRouter([authRoute, mainRoute]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <ProSidebarProvider>
          <RouterProvider router={router} />
        </ProSidebarProvider>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
