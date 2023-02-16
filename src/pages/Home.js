import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Ibrahim</h2>
        <div className="prompt">
          <p>A front-end developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          
            <h2> Front-End</h2>
            <span>
              ReactJS,HTML, CSS, CSS3, Javascript,bom,dom
             BootStrap,SASS,OOP C# ,OOP JS 
            </span>
         
        </ol>
      </div>
    </div>
  );
}

export default Home;
