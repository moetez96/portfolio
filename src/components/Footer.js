import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <FooterParent>
      <img
        src={"/assets/shape-bg.png"}
        alt="shape"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      ></img>
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
