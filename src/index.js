import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Projects,
  Post,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects">
        <Route path="" element={<Projects />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />

  </Router>,

  document.getElementById("root")
);
