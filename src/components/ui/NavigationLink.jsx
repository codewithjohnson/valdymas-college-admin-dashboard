import React from "react";
import { NavLink } from "react-router-dom";
import useDelayedNavigation from "../../hooks/useDelayedNavigation";

const NavigationLink = ({ to, children }) => {
  const navigate = useDelayedNavigation();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };
  return (
    <NavLink className="p-5" to={to} onClick={handleClick}>
      {children}
    </NavLink>
  );
};

export default NavigationLink;
