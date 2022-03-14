import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <NavLink to="/"><img src="emfie-green.png" alt="emfie" className="home-logo" ></img></NavLink>
      <h1 className="home-txt">Hello</h1>
      <h1 className="home-txt">I'm Emily</h1>
      <div className="home-nav">
          <NavLink className="home-nav-btn" to="/about">About</NavLink>
          <NavLink className="home-nav-btn" to="/projects">Projects</NavLink>
          <a href="https://github.com/EmilyyyL" target="_blank" rel="noreferrer" className="home-nav-btn">Github</a>
          <a href="https://www.linkedin.com/in/emily-x-lu/" target="_blank" rel="noreferrer" className="home-nav-btn">LinkedIn</a>
      </div>
    </div>
  );
}

export default Home;