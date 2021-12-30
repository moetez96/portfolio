import React from "react";
import styled from "styled-components";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import Header from "./Header";
import Profile from "./Profile";
import SlideRoutes from "react-slide-routes";
import { Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import SmoothScroll from "./SmoothScroll";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      {/*<SlideRoutes
        animation={"vertical-slide"}
        duration={500}
        timing={"ease-out"}
      >
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
      </SlideRoutes>*/}
      <div>
        <SmoothScroll>
          <Profile />
          <AboutMe />
          <Projects />
          <ContactMe />
        </SmoothScroll>
      </div>

      {/*<Footer />*/}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Home;
