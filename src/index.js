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
    
    {/* Navigation bar to appear on pages except home*/}
    {/* <Routes>
      <Route path="/about" element={<Navigation />} />
      <Route path="/projects" element={<Navigation />}>
        <Route path="" element={<Projects />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes> */}

    {/* Other pages */}
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
