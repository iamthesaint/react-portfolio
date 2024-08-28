import React from "react";
import { NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import Image from 'react-bootstrap/Image';
import deer from "../assets/deer.svg";


function Nav() {
// dropdown navbar on right side
return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        {/* add logo here */}
        <Image src={deer} alt="deer" className="deer" />
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* need to add a dropdown menu */}

          <ul className="navbar-nav">
            <NavItem>
              <NavLink to="/About" className="nav-link">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Portfolio" className="nav-link">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Contact" className="nav-link">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Resume" className="nav-link">Resume</NavLink>
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
