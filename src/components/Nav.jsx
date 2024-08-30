import React, { useState } from "react";
import { NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import deer from "../assets/deer.svg";
import { motion } from "framer-motion";

function Nav() {
  // State to manage the navbar-brand text
  const [brandText, setBrandText] = useState("About Me");

  // Event handlers for mouse hover
  const handleMouseEnter = (e) => {
    setBrandText("Home");
    e.target.style.color = "#ff00ab";
  };

  const handleMouseLeave = (e) => {
    setBrandText("About Me");
    e.target.style.color = "#000";
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <motion.img src={deer} alt="deer silhouette" className="deer"/>
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
            <NavLink to="/Portfolio" className="nav-link">
              Portfolio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Contact" className="nav-link">
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Resume" className="nav-link">
              Résumé
            </NavLink>
          </NavItem>
        </ul>
      </div>
      </div>
    </nav>
  );
}

export default Nav;
