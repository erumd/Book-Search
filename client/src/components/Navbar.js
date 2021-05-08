import React from "react";
import { Link } from "react-router-dom";

//navbar code
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " >
      <span className="navbar-brand">Google Book Search</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ml-auto">
            <Link className="nav-link" to="/">
              Search
            </Link>
          </li>
          <li className="nav-item ml-auto">
            <Link className="nav-link" to="/saved">
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
