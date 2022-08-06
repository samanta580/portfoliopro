import React from "react";
import { ScreenHeader } from "../../utilities/ScreeenHeader/SCreenHeader";


import './AboutMe.css'
export const AboutMe = ({functionhire:hireMeFunc}) => {
  const SCREEN_CONSTANTS = {
    description:
      "I am a hard-working and driven individual who isn't afraid to face a challenge. I'm passionate about my work and I know how to get the job done. I would describe myself as an open and honest person who doesn't believe in misleading other people and tries to be fair in everything I do.",
    highlight: {
      bullet: [
        "full Stack",
        "InterActive",
        "Redux",
        "React and Native",
        "Maneage database",
      ],
      heading: "Heare are a few Highlights",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlight.bullet.map((value, id) => (
      <div className="highlight" key={id}>
        <div className="highlight-blob"></div>
          <span>{value}</span>
        
      </div>
    ));
  };

  return (
    <div>
      <div className="about-me-container about-screen-container">
        <div className="about-me-parent">
          <ScreenHeader title="About Me" subHeading="Why hire Me?" />
          <div className="about-me-crad">
            <div className="about-me-profile"></div>
            <div className="about-me-details">
              <span className="about-me-description">
                {SCREEN_CONSTANTS.description}
              </span>
              <div className="about-me-highlights">
                <div className="highlight-heading">
                  <span>{SCREEN_CONSTANTS.highlight.heading} </span>
                </div>
                {renderHighlight()}
              </div>
              <div className="about-me-options">
                <button className="primarye-btn" onClick={hireMeFunc}> Hire Me </button>
                <a href="CV.pdf" download={"samaneh CV.pdf"}>
                  <button className="highlighted-btn">Get Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
