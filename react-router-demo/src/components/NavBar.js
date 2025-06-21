import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const NavStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "none",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <nav className="primary-nav">
      <NavLink style={NavStyles} to="/">
        Home
      </NavLink>
      <NavLink to="about" style={NavStyles}>
        About
      </NavLink>
      <NavLink to="products" style={NavStyles}>
        Products
      </NavLink>
      <NavLink to="users" style={NavStyles}>
        Users
      </NavLink>
    </nav>
  );
}

export default NavBar;
