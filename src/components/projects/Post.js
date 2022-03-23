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
        <Link to="/projects" className="back-link">Back to projects</Link>
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
          tutorial. This website is a work in progress.
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
        <Link to="/projects" className="back-link">Back to projects</Link>
      </div>
    );
  }

  if (postSlug === "remobi-toolkit") {
    return (
      <div className="container">
        <h1>Remobi Toolkit</h1>
        <Link to="/projects" className="back-link">Back to projects</Link>
        <p>Devpost Submission <a href="https://devpost.com/software/remobi-toolkit" target="_blank" rel="noreferrer">Remobi Toolkit Devpost</a></p>
        <p>Source code: <a href="https://github.com/Dhruv-A/UNIHACK2022" target="_blank" rel="noreferrer">UNIHACK 2022</a></p>
        <p>
          Remobi Toolkit is a chrome extension my team built for a hackathon.
          We wanted to create something that had different tools to enhance the 
          working from home experience including tools to revive the social aspect 
          of working in an office, improve wellbeing, assist with focusing on task, 
          help with keep track of meetings and provide a convenient place to write 
          down quick notes. We also wanted this toolkit to be easily accessible 
          by everyone, so we built a chrome extension. 
        </p>
        <p>
          However, this being our first hackathon for most of us and many of us 
          having commitments over the weekend, we struggled a lot with time 
          management. I built as much of the frontend as I could using HTML/CSS 
          following my teammates’ designs on Figma. I had around 20 minutes to 
          put together the pitch video so it’s not a very good quality pitch video. 
        </p>
        <p>
          More about this project can be found in the Devpost submission above.  
        </p>
        <Link to="/projects" className="back-link">Back to projects</Link>
      </div>
    );
  }

  if (postSlug === "brodify") {
    return (
      <div className="container">
        <h1>Brodify</h1>
        <Link to="/projects" className="back-link">Back to projects</Link>
        <p>Website <a href="https://personal-project-2021.web.app/" target="_blank" rel="noreferrer">Brodify</a></p>
        <p>Source code: <a href="https://github.com/EmilyyyL/Brodify" target="_blank" rel="noreferrer">EmilyyyL/Brodify</a></p>
        <p>
          This is a project I worked on with 3 other friends for a personal project competition. The initial idea was to have a gamified to-do list that will engage the users by having them collect points for the task they complete and then use those points to purchase upgrades for a character. We also wanted to incorporate a video chat function to encourage study groups. 
        </p>
        <p>
          The competition lasted 3 months. We figured out what kind of project we wanted to do quite early on. The next step is to figure out how to develop our project. I was researching what to use for our backend and I came across Firebase. Firebase has tools for authentication, database and hosting which is everything we needed and there were plenty of tutorials on YouTube on how to use Firebase. So, we decided to go with firebase. 
        </p>
        <p>
          This was our first time working on a software project together. The only prior experience I had with project development was how to use HTML and CSS and some knowledge of project management from the IPT (Information Processes and Technology) course back in high school. We did not even know how to use git to its fullest potential. 
        </p>
        <p>
          Over the next few months, we were learning how to use HTML/CSS and JavaScript. Soon we started getting busy with uni and did not work on the project much. I was quite certain that we would not have anything to submit for this competition, but everyone pulled through in the last few weeks and we were able to submit our project for the competition. Even though we did not implement everything we wanted or win anything in this competition, we all picked up a few new skills along the way. 
        </p>
        <p>
          For this project, I was able to fully implement an email and password based authentication system that is linked with the database which stores all of the users’ personal information and to-do list items. I also implemented email verification as well as user settings which allows the user to update their personal information. 
        </p>
        <Link to="/projects" className="back-link">Back to projects</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>404 Not Found</h1>
      <Link to="/projects" className="back-link">Back to projects</Link>
    </div>
  );
 
}

export default Post;