import React, { useState, useRef } from "react";

import { IoIosMenu } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import "./style.css";
import { AboutMe } from "../AboutMe/AboutMe";
import { Profile } from "../Home/profile/Profile";
import { Footer } from "../Home/Footer/Footer";
import { Resume } from "../Resume/Resume";
import { Testimonial } from "../Testimonial/Testimonial";
import { ContactMe } from "../ContactMe/ContactMe";
import { FooterE } from "../FooterE/FooterE";

export const MainHeader = () => {
  const [hambergerOpen, setHambergerOpen] = useState(true);
  const [className, setClassName] = useState("header");
  const home = useRef(null);
  const about = useRef(null);
  const resume = useRef(null);
  const testimonial = useRef(null);
  const contactMe = useRef(null);
  const toggleHamberger = () => {
    setHambergerOpen(!hambergerOpen);
    hambergerOpen ? setClassName("menu") : setClassName("header");
  };
const hireMeFunc=()=>{
  contactMe.current?.scrollIntoView({ behavior: "smooth" });
}
  // const closeMenu = () => {
  //   home.current?.scrollIntoView({ behavior: "smooth" });
  //   //console.log(data)
  //   if (className === "menu") {
  //     setHambergerOpen(!hambergerOpen);
  //     setClassName("header");
  //   }
  //   return;
  // };
  return (
    <div ref={home}>
      <div className="parent">
        <div className="logo">
          <span>MOHAMMADI</span>
        </div>

        <IoIosMenu className="hamburgerm" onClick={toggleHamberger} />
        {/* <NavT className={className} function={closeMenu} /> */}

        <div className={className}>
          <nav>
            <ul>
              <li
                onClick={() => {
                  home.current?.scrollIntoView({ behavior: "smooth" });
                  if (className === "menu") {
                    setHambergerOpen(!hambergerOpen);
                    setClassName("header");
                  }
                  return;
                }}
              >
                <a href="#/">Home</a>
              </li>
              <li
                onClick={() => {
                  about.current?.scrollIntoView({ behavior: "smooth" });
                  if (className === "menu") {
                    setHambergerOpen(!hambergerOpen);
                    setClassName("header");
                  }
                  return;
                }}
              >
                <a href="#/">about me</a>
              </li>

              <li onClick={() => {
                  resume.current?.scrollIntoView({ behavior: "smooth" });
                  if (className === "menu") {
                    setHambergerOpen(!hambergerOpen);
                    setClassName("header");
                  }
                  return;
                }}>
                <a href="#/">Resume</a>
              </li>
              <li
                onClick={() => {
                  testimonial.current?.scrollIntoView({ behavior: "smooth" });
                  if (className === "menu") {
                    setHambergerOpen(!hambergerOpen);
                    setClassName("header");
                  }
                  return;
                }}
              >
                <a href="#/">Testimonial</a>
              </li>
              <li onClick={() => {
                 hireMeFunc()
                  if (className === "menu") {
                    setHambergerOpen(!hambergerOpen);
                    setClassName("header");
                  }
                  return;
                }}>
                <a href="#/">Contact me</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="upbottom" onClick={()=>{
                  home.current?.scrollIntoView({ behavior: "smooth" })}}><FaArrowUp/></div>
      <Profile functionhire={hireMeFunc}  />
      <Footer />
      <div  ref={about}>
        <AboutMe functionhire={hireMeFunc} />
      </div>
      
      <div ref={resume} >
        <Resume/>
      </div>


      <div ref={testimonial} >
        <Testimonial/>
      </div>

      <div ref={contactMe} >
        <ContactMe/>
      </div>
      <FooterE/>

    </div>
  );
};
