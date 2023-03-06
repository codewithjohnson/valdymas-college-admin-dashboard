import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const UpdateAdminProfile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/admins/admin/profile");
  }, []);

  return (
    <div>
      <nav className="tabs border-b border-b-slate-200">
        <ul className="flex flex-row gap-4 mt-5 capitalize px-4">
          <NavLink
            to="/admins/admin/profile"
            style={({ isActive }) =>
              isActive ? { color: "#4B9CD3" } : { color: "black" }
            }
            className="p-3 flex flex-row gap-2"
          >
            <span className="material-symbols-outlined">person</span>
            <span>Profile</span>
          </NavLink>
          <NavLink
            to="/admins/admin/password"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#fd5c63",
                  }
                : { color: "black" }
            }
            className="p-3 flex flex-row gap-2"
          >
            <span class="material-symbols-outlined">lock</span>
            <span> change password</span>
          </NavLink>
        </ul>
      </nav>
      <main className="mt-4 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default UpdateAdminProfile;
