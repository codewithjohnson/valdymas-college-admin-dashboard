import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { ProSidebarProvider, useProSidebar } from "react-pro-sidebar";
import { NavLink, Link } from "react-router-dom";
import { sideBarMenuItems } from "../../utilities/menuItems";

export const Aside = () => {
  return (
    <div className="w-full h-full overflow-y-scroll bg-white border-0 sidebar--container font-poppins scrollbar-none">
      <Sidebar
        backgroundColor="white"
        transitionDuration={1000}
        width="200px"
        collapsedWidth="40px"
        border="0"
      >
        <Menu>
          <Menu className="capitalize text-[14px] -mx-4 pr-1">
            {sideBarMenuItems.map((item, index) => {
              return (
                <SubMenu
                  icon={item.icon}
                  defaultOpen={item.defaultOpen}
                  className="submenuTitle"
                  label={item.label}
                  key={index}
                >
                  {item.subMenus.map((subMenu) => {
                    return (
                      <NavLink to={`${subMenu.link}`}>
                        <MenuItem className="submenuText">
                          {subMenu.label}
                        </MenuItem>
                      </NavLink>
                    );
                  })}
                  <hr className="mx-6 my-3" />
                </SubMenu>
              );
            })}
          </Menu>
        </Menu>
      </Sidebar>
    </div>
  );
};
