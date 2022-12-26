import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { ProSidebarProvider, useProSidebar } from "react-pro-sidebar";
import { NavLink, Link } from "react-router-dom";

export const Aside = () => {
  return (
    <div className="sidebar--container font-poppins w-full">
      <Sidebar
        backgroundColor="white"
        transitionDuration={1000}
        width="200px"
        collapsedWidth="40px"
      >
        <Menu className="capitalize text-[14px] -mx-4">
          <Menu className="">
            <Link to="/dashboard">
              <MenuItem
                icon={
                  <span className="material-symbols-outlined submenuIcon">
                    team_dashboard
                  </span>
                }
              >
                <p className="submenuTitle">dashboard</p>
              </MenuItem>
            </Link>
          </Menu>

          <hr className="mx-6 my-3" />

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
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};
