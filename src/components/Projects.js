import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ProjectContainer from "./ProjectContainer";
import { Element } from "react-scroll";

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    id: 1,
    name: "Gateway",
    description:
      "A collaborative social network where users can communicate and help each other in their areas of training",
    stack: ["ReactJS", "ExpressJS", "NodeJS", "MongoDB"],
    fullDescription:
      "<div>The idea of the project is to create a social network where users help each other in their areas of training, work or skills.This social network can help user to : <ul><li>Confirm their skills. A score can be calculated and a badge can be given for every user.</li><li>Speed up hiring</li><li>Reach job seekers</li><li>Users can get answers for their questions</li></ul></div> <div>An user can be a student, teacher, developer, worker/expert at any domain, human resource manager, etc.</div><div>Its a space to share problems, inspiration, ideas, thought and reflection. </div><div>The user profile can be created via scrapped data from LinkedIn</div>",
    sourceCode: "https://github.com/moetez96/Deployed",
    screenShots: [
      "gateway/Picture1.png",
      "gateway/Picture2.png",
      "gateway/Picture3.png",
      "gateway/Picture4.png",
      "gateway/Picture5.png",
      "gateway/Picture6.png",
      "gateway/Picture7.png",
    ],
    livePreview: "https://www.youtube.com/watch?v=bF7OY1Wf0Qc&t=83s",
  },
  {
    id: 2,
    name: "Personalized e-learning platform",
    description:
      "A personalized e-learning platform that allows student to participate in courses dedicated to their specialty",

    stack: ["Angular CLI", "SpringBoot", "MongoDB"],
    sourceCode: "https://github.com/moetez96/E-learning",
    fullDescription:
      "<div>This application aims to deliver a personalized e-learning platform where teachers can create courses and manage its participants , documents, comments, and meeting. and the students can see and participate only to the courses dedicated to his/her specialty which will be selected on sign-up </div> <div>The objectives: <ul><li>Respond to the different needs of users (teacher, student).</li><li>Offer personalized graphical interfaces according to user roles (admin, teacher, student).</li><li>Take into account the safety aspect like the usage of smart contracts and the crypting of user sensative data.</li></ul>  </div>",
    screenShots: [
      "elearning/Picture1.png",
      "elearning/Picture2.png",
      "elearning/Picture3.png",
      "elearning/Picture4.png",
      "elearning/Picture7.png",
      "elearning/Picture5.png",
      "elearning/Picture6.png",
    ],
  },
  {
    id: 3,
    name: "Hunters Club",
    description: "A multi platform application for hunting enthusiasts",
    stack: ["Symfony", "CodeNameOne", "JavaFX", "Mysql"],
    sourceCode: "https://github.com/moetez96/Hunters-Club",
    sourceCode: "https://github.com/moetez96/Deployed",
  },
  {
    id: 4,
    name: "Microservice Application",
    description:
      "A simple stock management application with user authentication - Microservice Architecture",
    stack: [
      "SpringBoot",
      "ExpressJS",
      "ReactJS",
      "Mysql",
      "MongoDB",
      "h2",
      "Docker",
    ],
    sourceCode: "https://github.com",
    sourceCode: "https://github.com/moetez96/Stock_Management",
  },
  {
    id: 5,
    name: "TimeSheet(DevOps)",
    description:
      "An employees management application developed with CI/CD approach",
    stack: [
      "SpringBoot",
      "Mysql",
      "Jenkins",
      "Docker",
      "Git",
      "SonarQube",
      "Junit",
    ],
    sourceCode: "https://github.com/moetez96/TimeSheet",
    fullDescription:
      "<div>This application is developed with group of 2 peoples with a heavy focus on unit testing </div><div>This application allows: </div><ul><li>The Management of Employees</li><li>The Management of Departments</li><li>The Management of Enterprises</li><li>Creation of contracts, missions and Timesheets for the employees</li></ul>",
  },
];
const Projects = () => {
  return (
    <Element name="projects">
      <ProjectsContainer>
        <h1 className="headline">Projects</h1>
        <div className="projects">
          {projects.map((project) => (
            <ProjectContainer key={project.id} project={project} />
          ))}
        </div>
      </ProjectsContainer>
    </Element>
  );
};

const ProjectsContainer = styled.div`
  padding-top: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Poppins SemiBold";
  color: white;
  min-height: 100vh;
  @media screen and (min-width: 1920px) {
    height: 800px;
  }
  h1 {
    font-weight: 500;
    font-size: 60px;
    line-height: 74.4px;
    color: white;
    @media screen and (max-width: 650px) {
      font-weight: 700;
      font-size: 40px;
      line-height: 74.4px;
      color: white;
    }
  }
  .projects {
    max-height: 1100px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    align-content: space-between;
    gap: 20px 20px;
    @media screen and (max-width: 700px) {
    }
  }
`;

export default Projects;
