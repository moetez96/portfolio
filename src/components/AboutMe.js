import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Typical from "react-typical";
import { Element } from "react-scroll";
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "PHP",
  "C#",
  "React",
  "Redux",
  "Angular",
  "SpringBoot",
  ".NET",
  "Git",
  "CI/CD",
  "ExpressJS",
  "NodeJS",
  "Django",
  "Laravel",
  "Symfony",
];

const AboutMe = () => {
  return (
    <Element name="about" className="about">
      <AboutSection>
        <div className="split">
          <div className="container">
            <h1
              className="headline"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              About Me
            </h1>
            <span style={{ color: "(--white)" }}>
              {" "}
              <h2>
                {" "}
                {/*<Typical
                  loop={Infinity}
                  steps={[
                    "Computer Science Engineer",
                    1000,
                    "Web Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "MERN Stack Developer",
                    1000,
                    "MEAN Stack Developer",
                    1000,
                  ]}
                />*/}
              </h2>
            </span>
            <p
              className="paragraph"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              My name is Moetez Ayari, I am 25 years old, I have a computer
              science degree (bachelor of computer science). I am currently a
              third-year engineering student at ESPRIT. My degree emphasis is
              Software Engineering and web development.
            </p>
          </div>
          <div class="container2">
            <div className="section_skills" id="skills">
              <h2
                className="headline"
                data-aos="fade-up-left"
                data-aos-duration="1000"
              >
                Skills
              </h2>
              <div>
                <ul className="skills__list">
                  {skills.map((skill) => (
                    <li
                      className="skills__list-item btn1 btn1--plain"
                      data-aos="fade-up-right"
                      data-aos-duration="1000"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AboutSection>
    </Element>
  );
};

const AboutSection = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Poppins SemiBold";
  justify-content: center;
  min-height: 100vh;
  background: rgba(0, 150, 255, 0.8);
  color: #212529;
  @media screen and (min-width: 1920px) {
    height: 800px;
  }
  .split {
    @media screen and (min-width: 1920px) {
      width: 800px;
    }
  }
  .section_skills {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .container2 {
    margin-top: 10%;
    color: white;
    display: flex;
    justify-content: space-around;
  }
  .skills__list {
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    max-width: 700px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .btn1 {
    border-radius: 5px;
    display: block;
    cursor: pointer;
    padding: 0.8em 1.4em;
    font-weight: 500;
    font-size: 0.9rem;
    text-transform: lowercase;
    transition: transform 0.2s ease-in-out;
    @media screen and (max-width: 400px) {
      font-size: 0.6rem;
    }
  }

  .btn1--plain {
    text-transform: initial;
    background-color: var(--clr-bg-alt);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    border: 0;
  }

  .btn1--plain:hover {
    transform: translateY(-4px);
  }

  .skills__list-item {
    color: white;
    background-color: #3848a2;
    margin: 0.5em;
  }
  .skills__list-item:hover {
    transform: translateY(-7px);
  }
  .card2:hover {
    transform: translateY(-7px);
  }
  .container {
    margin-top: 8%;

    color: white;
    h3 {
      @media screen and (max-width: 650px) {
        font-size: 20px;
        color: white;
      }
    }
    .paragraph {
      @media screen and (max-width: 940px) {
        font-size: 14px;
        color: white;
      }
    }
    .headline {
      font-weight: 500;
      font-size: 60px;
      line-height: 74.4px;
      color: white;
      @media screen and (max-width: 380px) {
        font-size: 16px;
      }
      @media screen and (max-width: 650px) {
        font-weight: 700;
        font-size: 40px;
        line-height: 74.4px;
        color: white;
      }
    }
  }
`;

export default AboutMe;
