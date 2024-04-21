// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
// import NavLinks from "../../static/navLink/NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  let navigation = useNavigate();

  const [toggel, setToggel] = useState(false);

  return (
    <header>
      <div className="container">
        <nav>
          <a className="logo" onClick={() => navigation("/")}>
            <img src={Logo} alt="log" />
          </a>
          <div className={`nav__items ${toggel ? "show" : ""}`}>
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
          <button onClick={() => setToggel(!toggel)}>
            <GiHamburgerMenu className="menu" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
