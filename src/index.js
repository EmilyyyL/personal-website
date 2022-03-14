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
  Posts,
  Post,
} from "./components";

ReactDOM.render(

  
  <Router>
    
    {/* Navigation bar to appear on pages except home*/}
    <Routes>
      <Route path="/about" element={<Navigation />} />
      <Route path="/blog" element={<Navigation />} />
    </Routes>

    {/* Other pages */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />

  </Router>,

  document.getElementById("root")
);
