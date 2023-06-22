import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import logo from "../../images/Logo.png";
import { GrClose } from "react-icons/gr";
import "./Header.css";

const NavMenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);

  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  return (
    <header className="header__middle">
      <div className="contain">
        <div className="row">
          {/* Add Logo  */}
          <div className="header__middle__logo">
            <img src={logo} alt="logo" width="121" height="50" />
          </div>

          <div className="header__middle__menus">
            <nav className="main-nav ">
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <GrClose />{" "}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiMenu />{" "}
                  </span>
                </>
              )}

              <ul className={boxClass.join(" ")}>
                <li className="menu-item">
                  <NavLink
                    className="nav-link"
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/Accueil`}
                  >
                    {" "}
                    Accueil{" "}
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    className="nav-link"
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/actualite`}
                  >
                    {" "}
                    Actualité{" "}
                  </NavLink>{" "}
                </li>
                <li className="menu-item ">
                  <NavLink
                    className="nav-link"
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/`}
                  >
                    {" "}
                    Partenaire{" "}
                  </NavLink>{" "}
                </li>
                <li className="menu-item ">
                  <NavLink
                    className="nav-link"
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/contact`}
                  >
                    {" "}
                    nous contacter{" "}
                  </NavLink>{" "}
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/login`}
                  >
                    {" "}
                    <button className="bouton"> Connexion</button>{" "}
                  </NavLink>{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavMenu;
