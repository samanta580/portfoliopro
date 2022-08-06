import React, { useState } from "react";
import { ScreenHeader } from "../../utilities/ScreeenHeader/SCreenHeader";
import { Header } from "./Header/Header";
import "./resume.css";
export const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState();
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <div className="test">
            <span>{props.heading ? props.heading : ""} </span>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""} </span>
          </div>
          </div>
          {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          

          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""} </span>
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { lable: "Education", logoSrc: "Education.svg", id: "0" },
    { lable: "Work History", logoSrc: "work history.svg", id: "1" },
    { lable: "Programing skills", logoSrc: "programing skills.svg", id: "2" },
    { lable: "Projects", logoSrc: "projecst.svg", id: "3" },
    { lable: "Interests", logoSrc: "Interests.svg", id: "4" },   
    
   ];
  const programingSkillDetailes = [
    { skill: "javaScript", raitingPrecent: 85 ,id:1000},
    { skill: "React JS", raitingPrecent: 85 ,id:1001 },
    { skill: "React Native", raitingPrecent: 85,id:1002 },
    { skill: "Node JS", raitingPrecent: 8 ,id:1003 },
    { skill: "Core Java", raitingPrecent: 85 ,id:1004},
    { skill: "HTML", raitingPrecent: 85 ,id:1005},
    { skill: "CSS", raitingPrecent: 85,id:1006 },
    { skill: "UML", raitingPrecent: 85 ,id:1007},
    { skill: "RUP", raitingPrecent: 85 ,id:1008},
  ];

  const projectDatails = [
    {
      id:100,
      title: "Personal Portfolio website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A personal portfolio website to showcase all my detailes and projects at one page",
      subHeading: "Technologies used: REact JS,Bootstrap",
    },
    {
      id:101,
      title: "Personal Portfolio website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A personal portfolio website to showcase all my detailes and projects at one page",
      subHeading: "Technologies used: REact JS,Bootstrap",
    },
    {
      id:102,
      title: "Personal Portfolio website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A personal portfolio website to showcase all my detailes and projects at one page",
      subHeading: "Technologies used: REact JS,Bootstrap",
    },
    {
      id:103,
      title: "Personal Portfolio website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A personal portfolio website ti showcase all my detailes and projects at one page",
      subHeading: "Technologies used: REact JS,Bootstrap",
    },
  ];

  const resumDetails = [
    <>
    <div className="resume-screen-container" key="educatin">
      <ResumeHeading
        heading={"University of Parand, Tehran"}
        subHeading={"BACHELOR OF INFORMATION TECHNOLOGY"}
        fromDate={"2012"}
        toDate={"2016"}
      />
      <ResumeHeading
        heading={"High School, Tehran"}
        subHeading={"HIGH SCHOOL DIPLOMA"}
        fromDate={"2002"}
        toDate={"2006"}
      />
    </div>
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Technical and Vocational Training Organization"}
        subHeading={"SYSTEM ANALYST"}
        fromDate={"2014"}
        toDate={"2016"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          -Analysis deploymented systems such as Registery System, Teacher
          System,...
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          -Write RUP artivatc such as: Vision, UC Spesification, SAD
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          -Draw some Diagrams such as: US Diagram Class Diagram, Activity
          Diagram object Diagram, Sequence Diagram
        </span>
      </div>
      </div>
      <div
        className="resume-screen-container programing-skills-container"
        key={"programing-skills"}
      >
        {programingSkillDetailes.map((skill) => (
          
          <div className="skill-parent" key={skill.id}>
            <div className="heading-bullet"></div>
              <span>{skill.skill}</span>
              <div className="skill-percentage">
                <div
                  style={{ width: skill.raitingPrecent + "%" }}
                  className="active-percentage-bar"
                ></div>
              </div>
            
          </div>
        ))}
      </div>
      <div className="resume-screen-container" key="projects">
        {projectDatails.map((projectdetail) => (
          <ResumeHeading
            key={projectdetail.id}
            heading={projectdetail.title}
            subHeading={projectdetail.subHeading}
            description={projectdetail.description}
            fromDate={projectdetail.fromDate}
            toDate={projectdetail.toDate}
          />
        ))}
      </div>
      
      <div className="resume-screen-container" key={"interests"}>
        <ResumeHeading heading="Sport" description="Swimming has been my favourite sport since I was very small.
         I learnt to swim when I was just 5 years old.
         Swimming is a very popular sport; furthermore, it provides individuals with several physical and mental benefits." />
        <ResumeHeading
          heading="Patineh"
          description="SwimmPatineh called to paint clay plates after they are installed on a wall that is made by
         the resin for the coloring (with enamels that are on the pottery and cooked on the grill difference Complete with)
         the resin boards and ceramic reliefs completely waterproof and highly resistant to cold and heat and high humidity."
        />
      </div>
   
    </>
  ];

  const handleCarousal = (index) => {

    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)"}
    };
     setCarousalOffSetStyle(newCarousalOffset);
     setSelectedBulletIndex(index);
    // console.log("you click");
    // console.log(carousalOffSetStyle.style)
    // console.log(selectedBulletIndex)
  };
  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style }
        className="resume-detailes-carousal"
      >
        {resumDetails.map((resumeDetail) => resumeDetail)}
        {/* {console.log(resumDetails.map((resumeDetail) => resumeDetail.props)) } */}
      </div>
    );
  };

  const getBullets = () => {
    return resumeBullets.map((bullet) => (
      
      <div
        onClick={() => handleCarousal(bullet.id)}
        // id={bullet.id }
        className={
          bullet.id === selectedBulletIndex
          ?"selected-bullet bullet"
          :"bullet"
        }
        key={bullet.id}
      >

        <img
          className="bullet-logo"
          src={require(`../../assets/Home/svg/${bullet.logoSrc}`)}
          alt="Oops...no internet connection"
        />
        <div
           className= "bullet-label"
          
         >{bullet.lable }</div>
      </div>
    ));
  };

  return (
    <div>
      
    <Header/>
      <div className="resume-container screen-container">
        <div className="resume-content">
          <ScreenHeader title={"Resume"} subHeading={"My Formal Boi Deyails"} />
          <div className="resume-card">
            <div className="resume-bullets">
              <div className="bullet-container">
                <div className="bullet-icons"></div>
                <div className="bullets">{getBullets()} </div>
              </div>
            </div>
            <div className="resume-bullet-detailes">{getResumeScreen()} </div>
          </div>
        </div>
      </div>
    </div>
  );
};
