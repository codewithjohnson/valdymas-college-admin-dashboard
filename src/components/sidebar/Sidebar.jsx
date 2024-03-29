import React, { memo } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { sideBarMenuItems } from "../../utilities/menuItems";

const Aside = memo(() => {
  return (
    <div className={`w-full h-full border-0 font-poppins pb-40 bg-sky-100`}>
      <Sidebar
        backgroundColor="white"
        transitionDuration={1000}
        width="250px"
        collapsedWidth="40px"
        border="0"
        rootStyles={{ overflowY: "hidden", height: "100%"}}
      >
        <Menu>
          <Menu className="capitalize text-[14px] -mx-4 pr-5">
            {sideBarMenuItems.map((item) => {
              return (
                <SubMenu
                  icon={item.icon}
                  defaultOpen={item.defaultOpen}
                  className="submenuTitle"
                  label={item.label}
                  key={item.id}
                >
                  {item.subMenus.map((subMenu) => {
                    return (
                      <MenuItem
                        className="submenuText"
                        key={subMenu.id}
                        routerLink={<Link to={`${subMenu.link}`} />}
                      >
                        {subMenu.label}
                      </MenuItem>
                    );
                  })}
                  <hr className="mx-6 my-3" key={item.id} />
                </SubMenu>
              );
            })}
          </Menu>
        </Menu>
      </Sidebar>
    </div>
  );
});

export default Aside;
