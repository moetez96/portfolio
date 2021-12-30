import "./ProjectContainer.css";
import React, { useState } from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import ReactHtmlParser from "react-html-parser";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .modalContainer {
    width: 90%;
    height: 90%;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: #045de9;
    background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
    display: flex;
    flex-direction: column;
    padding: 25px;
  }
  .images {
    display: flex;
    flex-direction: column;
    align-item:center;
    justify-content: center:
  }
  .image {
    margin: auto;
    height:40%;
    width: 50%;
  }
  .description{
    font-weight: 400;
    font-weight: bolder;
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    @media screen and (max-width: 1000px) {
      font-size: 0.83em;
    }
    @media screen and (max-width: 350px) {
      font-size: 0.7em;
    }
  }
  .header2 {
    font-weight: bolder;
    color: white;
  }
  .titleCloseBtn {
    position: relative;
    width: 32px;
    height: 32px;
    opacity: 0.3;
  }
  .titleCloseBtn:hover {
    opacity: 1;
    cursor: pointer;
  }
  .titleCloseBtn:before,
  .titleCloseBtn:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  .titleCloseBtn:before {
    transform: rotate(45deg);
  }
  .titleCloseBtn:after {
    transform: rotate(-45deg);
  }
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};
const Modal = ({ openModal, openChangeOpen, project }) => {
  const handleClose = () => {
    openChangeOpen(false);
  };
  var list = [];
  if (project.screenShots) {
    for (var pic of project.screenShots) {
      list.push(pic);
    }
  }
  return (
    <StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={openModal}
      onClose={handleClose}
      BackdropComponent={Backdrop}
    >
      <div className="modalContainer">
        <div
          className="titleCloseBtn"
          href="#"
          onClick={() => {
            handleClose(false);
          }}
        ></div>
        <div className="description">
          {ReactHtmlParser(project.fullDescription)}
        </div>
        {project.screenShots ? (
          <div>
            <h2 className="header2">Pictures</h2>
            <Carousel className="images" showThumbs={false}>
              {list.map((pic, i) => (
                <div className="image">
                  <img src={pic} alt={pic} />
                </div>
              ))}
            </Carousel>
          </div>
        ) : (
          <></>
        )}
        ,
      </div>
    </StyledModal>
  );
};

export default Modal;
