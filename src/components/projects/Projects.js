import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
      <div className="projects container">
        <h1>Projects</h1>
        <p>Here are some of the projects I have worked on over the years.</p>

        <Link to="/projects/emfie" className="post-text">
          <div className="post-preview">
            <div>
              <h2>emfie</h2>
              <p>
                That's the website you're looking at right now. I finally built
                a website to showcase some of the projects I have worked on and
                tell the stories behind them. 
              </p>
              <p className="read-more">Read more</p>
            </div>
            <img src="emfie-green.png" alt="emfie" className="post-preview-img"></img>
          </div>
        </Link>

        <Link to="/projects/remobi-toolkit" className="post-text">
          <div className="post-preview">
            <div>
              <h2>Remobi Toolkit</h2> 
              <p>
                Remobi Toolkit is a chrome extension my team built for Unihack's
                2022 Imagination Hackathon. It is a work from home toolkit with 5 different features
                each with a unique purpose but they all work together to make the 
                work from home experience better. 
              </p>
              <p className="read-more">Read more</p>
            </div>
            <img src="remobi-toolkit.png" alt="Remobi Toolkit" className="post-preview-img"></img>
          </div>
        </Link>

        <Link to="/projects/brodify" className="post-text">
          <div className="post-preview">
            <div>
              <h2>Brodify</h2>
              <p>
                Brodify is a productivity website that was built with a couple 
                of friends for a personal projects competition. The intial idea 
                was a productivity website that gamifies tasks and encourages 
                studying with friends with the aim making studying feel less 
                isolating escpecially during lockdown. 
              </p>
              <p className="read-more">Read more</p>
            </div>
            <img src="brodify.png" alt="Brodify" id="brody" className="post-preview-img"></img>
          </div>
        </Link>

        <Link to="/projects/plant-project" className="post-text">
          <div className="post-preview">
            <div>
              <h2>Plant Project</h2>
              <p>
                Plant Project is the a website I built in Year 10 for an assignment.
                That is the only website I could say I finished building. Since
                that website is not deployed, I want to share the content of that website here. 
              </p>
              <p className="read-more">Read more</p>
            </div>
            <img src="plant-project.png" alt="plant project" className="post-preview-img"></img>
          </div>
        </Link>

      </div>
  );
}

export default Projects;