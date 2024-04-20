// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import NavLinks from "../../static/navLink/NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  let navigation = useNavigate();
  const [toggel, setToggel] = useState(false);
  return (
    <header>
      <div className="container">
        <nav>
          <a className="logo" href="#" onClick={() => navigation("/")}>
            <img src={Logo} alt="log" />
          </a>
          <NavLinks className={`nav__items ${toggel ? "show" : ""}`} />
          <button onClick={() => setToggel(!toggel)}>
            <GiHamburgerMenu className="menu" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
