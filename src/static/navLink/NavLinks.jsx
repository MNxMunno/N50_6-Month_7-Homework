// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="nav__links">
      <NavLink className="nav__link" to={"/"}>
        Home
      </NavLink>
      <NavLink className="nav__link" to={"/about"}>
        About
      </NavLink>
      <NavLink className="nav__link" to={"/services"}>
        Services
      </NavLink>
      <NavLink className="nav__link" to={"/careers"}>
        Careers
      </NavLink>
      <NavLink className="nav__link" to={"/blog"}>
        Blog
      </NavLink>
      <button className="nav__btn">Clone project</button>
    </div>
  );
};

export default NavLinks;
