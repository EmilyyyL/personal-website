import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <NavLink to="/"><img src="emfie-green.png" alt="emfie" className="logo" ></img></NavLink>
      <nav className="navbar">
        <div>
          <div className="navbar-nav">
              <NavLink className="nav-link" to="/about">About</NavLink>
              <NavLink className="nav-link" to="/projects">Projects</NavLink>
              <a href="https://github.com/EmilyyyL" className="nav-link"><i class="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/emily-x-lu/" className="nav-link"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
        
      </nav>
    </div>
  );
}

export default Navigation;