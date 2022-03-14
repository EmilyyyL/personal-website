import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <h1>About me</h1>
        <h2>Hello.</h2>
        <p className="text">
          My name is Emily. I am a second year university student 
          studying computer science at the University of New South Wales 
          (UNSW). I will be using this website is to showcase all the projects 
          I have done throughout the years and tell the stories behind them. 
        </p>
        <br/>
        <h2>Why emfie?</h2>
        <p className="text">
          You may have noticed the name of this website is emfie. Emfie is a 
          nickname my friends gave me. It is a combination of my first name, Emily
          and my dog's name, Alfie. Since this domain name was avaliable, 
          I decided turn emfie into my personal website where I can share my work. 
        </p>
        <p className="text">Here is a picture of Alfie. </p>
        <img src="alfie.jpg" alt="Alfie" className="alfie"></img>
      </div>
    </div>
  );
}

export default About;