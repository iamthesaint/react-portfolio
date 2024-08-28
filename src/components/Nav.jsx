import React, { useState } from "react";
import { NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import Image from "react-bootstrap/Image";
import deer from "../assets/deer.svg";

function Nav() {
  // State to manage the navbar-brand text
  const [brandText, setBrandText] = useState("steph");

  // Event handlers for mouse hover
  const handleMouseEnter = (e) => {
    setBrandText("home");
    e.target.style.color = "#ff00ab";
  };

  const handleMouseLeave = (e) => {
    setBrandText("steph");
    e.target.style.color = "#000";
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <Image src={deer} alt="deer" className="deer" />
        <a
          className="navbar-brand"
          href="/"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {brandText}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavItem>
            <NavLink to="/About" className="nav-link">
              about
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Portfolio" className="nav-link">
              portfolio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Contact" className="nav-link">
              contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Resume" className="nav-link">
              résumé
            </NavLink>
          </NavItem>
        </ul>
      </div>
      </div>
    </nav>
  );
}

export default Nav;
