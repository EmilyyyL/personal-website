import React, { useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  if (postSlug === "emfie") {
    return (
      <div class="container">
        <h1>emfie</h1>
        <p>Source code: <a href="https://github.com/EmilyyyL/personal-website" target="_blank" rel="noreferrer">EmilyyyL/personal-website</a></p>
        <p>
          I have wanted to make a personal website for quite a while now, but I 
          never had the courage to do it. However, I slowly realised how much I 
          wanted to share the stories behind the projects I have worked on, 
          especially the development process and how the final product came to be. 
        </p>
        <p>
          Over the years, I have made a handful of websites with HTML/CSS and a 
          sprinkle of JavaScript. The website I was proudest of was 
          <NavLink to="/projects/plant-project" className="inline-links"> Plant Project </NavLink>
          as it was the most complete website I have ever built and the most 
          aesthetic website I designed, even though it was built entirely in 
          HTML/CSS and everything was positioned using pixels. I decided to take
          on a new challenge for this website and built it using React. I 
          followed
          <a href="https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/" className="inline-links"> this </a>
          tutorial, and I don’t completely understand everything, so any 
          improvements and suggestions will be greatly appreciated. 
        </p>
        <p>
          One of the reasons I waited so long to start this project is because I 
          am not good at design. I couldn’t even figure out what kind of layout I 
          wanted, let alone a whole colour scheme. I was introduced to a program 
          called Figma whilst working on Remobi Toolkit. Figma is a collaborative 
          interface design tool and seeing my team put together the interface of 
          Remobi Toolkit, I was inspired to have a go at designing my own website 
          because it was cool seeing a blank frame turn into an awesome design and 
          all the tools are easy to use.
        </p>
        <p>
          Another reason I was hesitant to start is because I would have to write. 
          I want to write about my projects, but I’ve never been good at writing 
          either. Maybe it’s because of 
          <NavLink to="/projects/imposter-syndrome" className="inline-links"> imposter syndrome</NavLink>
          , something I 
          experienced all throughout high school without knowing. The thought 
          that I will never be good at writing or designing stopped me from 
          writing and designing things unless I needed to. Now, I’m working on 
          overcoming imposter syndrome one step at a time.  
        </p>
      </div>
    );
  }

  if (postSlug === "remobi-toolkit") {
    return (
      <div className="container">
        <h1>Remobi Toolkit</h1>
      </div>
    );
  }

  if (postSlug === "brodify") {
    return (
      <div className="container">
        <h1>Brodify</h1>
      </div>
    );
  }

  if (postSlug === "plant-project") {
    return (
      <div className="container">
        <h1>Plant Project</h1>
      </div>
    );
  }

  if (postSlug === "imposter-syndrome") {
    return (
      <div className="container">
        <h1>[Article] Imposter Syndrome</h1>
        <p>Secret article that I will get around to writing soon.</p>
      </div>
    );
  }
 
}

export default Post;