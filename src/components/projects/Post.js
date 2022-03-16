import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

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
          I have wanted to make a personal website for quite a while now, but 
          I never had the courage to do it. But I slowly realised how much I 
          wanted to share the stories behind the projects I have worked on as 
          well build up my portfolio and learn some new skills.
        </p>
        <p>
          Over the years, I have made a handful of websites with HTML/CSS and a 
          sprinkle of JavaScript. The website I was most proud of was 
          <Link to="/projects/plant-project" className="inline-links"> Plant Project </Link>
          as it was the most complete website I have ever built and the most 
          aesthetic website I designed, even though it was built entirely in 
          HTML/CSS, and everything was positioned using pixels. For this 
          website, I decided to take on a new challenge and built it using React. 
          I followed 
          <a href="https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/" className="inline-links"> this </a>
          tutorial, and I don’t completely understand everything yet, so 
          any improvements and suggestions will be greatly appreciated. 
        </p>
        <p>
          One of the reasons I waited so long to start this project is because 
          I am not good at design. I couldn’t even figure out what kind of 
          layout I wanted, let alone a whole colour scheme. I was introduced 
          to a program called Figma while working on Remobi Toolkit for a 
          hackathon. Figma is a collaborative interface design tool and my 
          team used it to put together the interface of Remobi Toolkit. 
          Inspired by seeing them turn a blank frame into an awesome design, 
          I decided to try designing my own website. 
        </p>
        <p>
          The name for this website was one of the first things I decided 
          because I really wanted to embrace the nickname my friends came up 
          with. I checked if this domain was available and surely enough it 
          was. This gave me a lot of motivation to start working on this 
          project. I went for a classic website layout with a top bar and 
          content below it but have the home page being slightly different to the 
          others. Next, I chose out a colour palette using a colour palette 
          generator as well as a font. I wanted to have a logo for this website,
          so I started experimenting with circular geometric designs. However, 
          I eventually decided to keep it simple and have the logo be the name 
          of this website but in a different font. 
        </p>
        <p>
          Then came the biggest challenge, realising that this website will 
          actually be seen by others. I always thought personal websites and 
          blogs were created by people who wanted to show their work because 
          they are good at what they do. I have never been confident in my 
          writing or designing skills. I often wonder if it was imposter 
          syndrome that stopped me from even trying. The mere thought that I 
          will never be good at certain things ceased my motivation to do 
          anything at all. All this made me extremely hesitant to start my 
          own since my GitHub is full of unfinished projects as well but 
          wanted to highlight the achievements and skills I gained from working 
          on those projects. So here I am. 
        </p>
      </div>
    );
  }

  if (postSlug === "remobi-toolkit") {
    return (
      <div className="container">
        <h1>Remobi Toolkit</h1>
        <p>Devpost Submission <a href="e" target="_blank" rel="noreferrer">Remobi Toolkit Devpost</a></p>
        <p>Source code: <a href="https://github.com/Dhruv-A/UNIHACK2022" target="_blank" rel="noreferrer">UNIHACK 2022</a></p>
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
        <Link to="/"></Link>
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