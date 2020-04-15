import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activStyle}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
