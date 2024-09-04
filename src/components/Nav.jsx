import React, { useState } from "react";
import { NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import gazelle from "../assets/gazelle3.svg";
import { motion } from "framer-motion";

function Nav() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const variants = {
    open: { opacity: 1, x: 0 },
    collapsed: { opacity: 0, x: "100%" },
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <motion.img
          src={gazelle}
          alt="Gazelle Logo"
          className="gazelle"
          // on hover shake animation
          whileHover={{ scale: 1, rotate: [0, -10, 10, -10, 10, -10, 10, -10, 0] }}
          transition={{ duration: "1.5", ease: "easeInOut" }}
        />

        <h1 className="navbar-brand">Steph St.Hilaire</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <motion.div
            initial={false}
            animate={isNavCollapsed ? "collapsed" : "open"}
            variants={variants}
          ></motion.div>

          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isNavCollapsed ? "collapse" : "show"
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <NavItem>
              <NavLink to="/" className="nav-link">
                About Me
              </NavLink>
            </NavItem>
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
