import React from "react";
import Typical from "react-typical";
import styled from "styled-components";
import { Element } from "react-scroll";

const Profile = () => {
  return (
    <Element name="profile">
      <ProfileContainer>
        <ProfileParent>
          <div className="profile-details">
            <ProfileDetailName>
              <span className="primary-text">
                {" "}
                Hello, My name is
                <span style={{ color: "#0782E2" }}> Moetez Ayari </span>
              </span>
            </ProfileDetailName>
            <ProfileDetailRole>
              <ProfileDetailTagline>
                I am a fullstack developer
              </ProfileDetailTagline>
            </ProfileDetailRole>
            <ProfileOptions>
              <a href="/assets/cv/CV-Moetez-Ayari.pdf" target="_blank" download>
                <button className="btn highlighted-btn"> Download CV </button>
              </a>
            </ProfileOptions>
          </div>
          <ProfilePicture>
            <div className="profile-picture-background"></div>
          </ProfilePicture>
        </ProfileParent>
      </ProfileContainer>
    </Element>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  min-height: 100vh;
  @media screen and (min-width: 1920px) {
    height: 800px;
  }
`;

const ProfileParent = styled.div`
  display: flex;
  align-items: center;
  color: aliceblue;
  @media screen and (max-width: 810px) {
    flex-direction: column-reverse;
    margin: 40px 0 0 0;
  }
`;

const ProfileDetailName = styled.div`
  font-size: 24px;
  font-family: "Poppins SemiBold";
  @media screen and (max-width: 380px) {
    font-size: 16px;
  }
`;
const ProfileDetailRole = styled.div`
  display: flex;
  flex-direction: column;
  margin: 14px 0 24px 0;
  h1 {
    font-size: 40px;
    font-family: cursive;
    @media screen and (max-width: 380px) {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 810px) {
    margin: 0 !important;
  }
`;

const ProfileDetailTagline = styled.div`
  font-size: 40px;
  font-family: "Poppins Light";
  margin: 5px 0 0 0;
  @media screen and (max-width: 380px) {
    font-size: 26px;
  }
`;

const ProfileOptions = styled.div`
  .highlighted-btn {
    background-color: 0782e2;
    margin: 0 0 0 28px;
    @media screen and (max-width: 810px) {
      margin: 0 !important;
    }
  }
  .highlighted-btn:hover {
    margin: 0 0 0 28px;
    background-color: cornsilk;
    color: #111;
  }
`;
const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 white;
  border-radius: 50%;
  height: 380px;
  width: 380px;
  margin: 0 0 0 100px;
  @media screen and (max-width: 910px) {
    height: 320px;
    width: 320px;
    margin: 0 0 0 4px;
  }
  @media screen and (max-width: 380px) {
    height: 260px;
    width: 260px;
    margin: 0 0 0 4px;
  }
  @media screen and (max-width: 810px) {
    margin: 0 !important;
  }
`;

export default Profile;
