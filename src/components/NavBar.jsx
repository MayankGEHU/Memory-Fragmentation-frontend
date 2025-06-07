import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="nav-container">
      <NavLink
        to="/"
        className={`nav-item ${location.pathname === "/" ? "active-tab" : ""}`}
      >
        Home
      </NavLink>
      <NavLink
        to="/memory"
        className={`nav-item ${location.pathname === "/memory" ? "active-tab" : ""}`}
      >
        Visualizer
      </NavLink>
    </nav>
  );
};

export default NavBar;
