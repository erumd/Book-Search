import React from 'react';
import { Link } from "react-router-dom";
import "./styles.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link
          to="/"
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }
        >
          <h2>Book Search </h2>
        </Link>

        <Link
          to="/"
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }
        > Search </Link>


        <Link
          to="/saved"
          className={
            window.location.pathname === "/saved"
              ? "nav-link active"
              : "nav-link"
          }
        > Saved </Link>
    </nav>
  );
}

export default Nav;
