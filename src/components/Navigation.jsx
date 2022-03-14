import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
        <NavLink to="/"><img src="emfie-green.png" alt="emfie" className="logo" ></img></NavLink>
      <nav className="navbar">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
        <NavLink className="nav-link" to="/projects">Projects</NavLink>
        <a href="https://github.com/EmilyyyL" target="_blank" rel="noreferrer" className="nav-link"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/emily-x-lu/" target="_blank" rel="noreferrer" className="nav-link"><i class="fa-brands fa-linkedin"></i></a>
        
      </nav>
    </div>
  );
}

export default Navigation;