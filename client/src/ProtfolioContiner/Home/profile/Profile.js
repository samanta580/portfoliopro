import React from "react";
import './Profile.css'
import { FaInstagram ,FaGooglePlusSquare ,FaYoutubeSquare,FaLinkedin,FaTwitterSquare } from "react-icons/fa"

// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min';

//import Typical from 'react-typical' 
export const Profile = ({functionhire:hireMeFunc}) => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div>
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">

            
            <a href="https://www.linkedin.com/in/samaneh-azhar/">
              
              <FaLinkedin className="icon"/>
            </a>

            <a href="#/">
              <FaGooglePlusSquare className="icon"/>
            </a>

            <a href="#/">
              <FaInstagram className="icon"/>
            </a>

            <a href='#/'>
              <FaYoutubeSquare className="icon"/>
            </a>

            <a href="#/">
              <FaTwitterSquare className="icon"/>
            </a>




            </div>
          </div>
        </div>
        <div className="profile-detils-name">
          <span className="primary-text">
            {" "}
            I'm here Samaneh
          </span>
        </div>
        <div className="profile-details-role">
            <span className="primary-text">
                {" "}
                <h1>
                  {" "}
                  Samaneh developer
                  {/* <Typical
                  loop={Infinity}
                  steps={[
                    "Samaneh dev ",1000,
                    "Full Satack developer",1000,
                    "Cross Platform",1000,
                    "React/React nateive",1000,
                    "MERN Stack",1000
                ]}
                wrapper="p"
                  /> */}
                </h1>
                <span className="profile-role-tagline">
                  Mid-Level Full Stack Developer
                
                </span>

            </span>
        </div>
        <div className="profile-options">
          <button className="highlighted-btn primary-btn" onClick={hireMeFunc}>
            {" "}Hire Me{" "}
          </button>
          <a href="CV.pdf" download={"samaneh CV.pdf"}>
            <button className="highlighted-btn">Get Resume</button>
          </a>
        </div>
        </div>
        <div  >
        <div className="profile-picture">
          <div className="profile-pucture-backgroung">

          </div>
        
        </div>
        </div>
      </div>
    </div>
  );
};
