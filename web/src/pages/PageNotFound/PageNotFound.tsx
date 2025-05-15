import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";
interface Props {}
const PageNotFound: React.FC<Props> = () => {
  return (
    <div className="page__not__found">
      <img src="/robot.jpg" alt="logo" />
      <Link to="/about" className="page__not__found__name">
        Tinashe Crispen Garidzira
      </Link>
      <h1>
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </h1>
      <p>Page Not Found.</p>

      <div className="not__found__links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
