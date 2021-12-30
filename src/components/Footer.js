import React from "react";
import styled from "styled-components";
import shape from "../assets/home/shape-bg.png";
const Footer = () => {
  return (
    <FooterParent>
      <img src={shape} alt="shape"></img>
    </FooterParent>
  );
};

const FooterParent = styled.div`
  position: absolute;
  bottom: 0;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Footer;
