import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
interface Props {}
const Header: React.FC<Props> = () => {
  const location = useLocation();
  return (
    <div className="header">
      <div className="header__content__navs">
        <Link
          to="/"
          className={
            location.pathname === "/" ? "header__nav__active" : "header__nav"
          }
        >
          Home
        </Link>
      </div>
      <div className="header__navs__left">
        <Link
          to="/about"
          className={
            location.pathname === "/about"
              ? "header__nav__active"
              : "header__nav"
          }
        >
          About
        </Link>
        <Link
          to="/projects"
          className={
            location.pathname === "/projects"
              ? "header__nav__active"
              : "header__nav"
          }
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Header;
