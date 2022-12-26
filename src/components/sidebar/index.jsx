import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { ProSidebarProvider, useProSidebar } from "react-pro-sidebar";
import { NavLink, Link } from "react-router-dom";

export const Aside = () => {
  return (
    <div className="sidebar--container font-poppins w-full h-full overflow-y-scroll scrollbar-none">
      <Sidebar
        backgroundColor="white"
        transitionDuration={1000}
        width="200px"
        collapsedWidth="40px"
      >
        <Menu>
          <Menu className="capitalize text-[14px] -mx-4 pr-1">
            {/* dashboard default */}

            <SubMenu
              icon={
                <span className="material-symbols-outlined  submenuIcon">
                  group
                </span>
              }
              defaultOpen
              className="submenuTitle"
              label="dashboard"
            >
              <Link className="">
                <MenuItem className="submenuText">default</MenuItem>
              </Link>
              <Link>
                <MenuItem className="submenuText">analytics</MenuItem>
              </Link>
              <hr className="mx-6 my-3" />
            </SubMenu>

            {/* Data Page */}
            <SubMenu
              icon={
                <span className="material-symbols-outlined  submenuIcon">
                  group
                </span>
              }
              defaultOpen
              className="submenuTitle"
              label="Data Page"
            >
              <Link className="">
                <MenuItem className="submenuText">students</MenuItem>
              </Link>
              <Link>
                <MenuItem className="submenuText">results</MenuItem>
              </Link>
              <hr className="mx-6 my-3" />
            </SubMenu>

            {/* department pages */}
            <SubMenu
              icon={
                <span className="material-symbols-outlined  submenuIcon">
                  group
                </span>
              }
              defaultOpen
              className="submenuTitle"
              label="department"
            >
              <Link className="">
                <MenuItem className="submenuText">science</MenuItem>
              </Link>
              <Link>
                <MenuItem className="submenuText">social sciences</MenuItem>
              </Link>
              <Link>
                <MenuItem className="submenuText">art</MenuItem>
              </Link>
              <hr className="mx-6 my-3" />
            </SubMenu>
          </Menu>
        </Menu>
      </Sidebar>
    </div>
  );
};
