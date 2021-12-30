import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ContactMe from "./ContactMe";
import Profile from "./Profile";
import styled from "styled-components";
import Header from "./Header";

const Paralex = () => {
  return (
    <HomeContainer>
      <Header />
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Profile />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "#ff6d6d" }}
        />

        <ParallaxLayer
          offset={1}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <ContactMe />
        </ParallaxLayer>
      </Parallax>
    </HomeContainer>
  );
};
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: #24263b;
`;
export default Paralex;
