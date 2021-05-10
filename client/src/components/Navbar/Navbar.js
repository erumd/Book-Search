import React from "react";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';

//navbar code
const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light justify-content-center" style={{backgroundColor: "lavender"}}  >
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

     
     
      <div className="navbar-nav flex" >
        <div className="navbar-nav ">
             <Button href="/" variant="info" size="lg">Search</Button>
            <Button as={Link} to='/saved' variant="info" size="lg"> Saved </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
