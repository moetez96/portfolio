import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <FooterParent>
      <img src={"/assets/shape-bg.png"} alt="shape"></img>
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
