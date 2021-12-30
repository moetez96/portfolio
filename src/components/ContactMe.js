import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./Footer";
import { Element } from "react-scroll";
import validator from "validator";
import emailkey from "./emailkey";
import emailjs from "@emailjs/browser";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ContactMe = () => {
  const form = useRef();
  const [afterSubmitt, setAfterSubmitt] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submited, setSubmited] = useState(false);
  const [formIsValid, setFormIsValid] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    let regex = new RegExp("[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}");
    if (e.target.name === "name") {
      setName(e.target.value);
      e.target.value === ""
        ? setFormIsValid((prevState) => ({ ...prevState, name: false }))
        : setFormIsValid((prevState) => ({ ...prevState, name: true }));
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
      !validator.isEmail(e.target.value)
        ? setFormIsValid((prevState) => ({ ...prevState, email: false }))
        : setFormIsValid((prevState) => ({ ...prevState, email: true }));
    }
    if (e.target.name === "subject") {
      setSubject(e.target.value);
      e.target.value === ""
        ? setFormIsValid((prevState) => ({
            ...prevState,
            subject: false,
          }))
        : setFormIsValid((prevState) => ({
            ...prevState,
            subject: true,
          }));
    }
    if (e.target.name === "message") {
      setMessage(e.target.value);
      e.target.value === ""
        ? setFormIsValid((prevState) => ({
            ...prevState,
            message: false,
          }))
        : setFormIsValid((prevState) => ({
            ...prevState,
            message: true,
          }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmited(true);
    console.log(formIsValid);
    if (
      formIsValid.name &&
      formIsValid.email &&
      formIsValid.subject &&
      formIsValid.message
    ) {
      emailjs
        .sendForm(
          emailkey.SERVICE_ID,
          emailkey.TEMPLATE_ID,
          form.current,
          emailkey.USER_ID
        )
        .then(
          (result) => {
            setAfterSubmitt({
              color: "#0782E2",
              message: "Your message have been sent, I will respond shortly",
            });
            console.log(result.text);
            setOpen(true);
          },
          (error) => {
            setAfterSubmitt({
              color: "#f44336",
              message: "Sorry your message was not sent, Please try again",
            });
            console.log(error.text);
            setOpen(true);
          }
        );
    }
  };

  return (
    <Element name="contact">
      <ContactSection>
        <div>
          <div className="container">
            <h1>Contact Me</h1>
            <p className="paragraph">
              Thank you for visiting my portfolio i hope you liked what you saw,
              for any further information you can send me contact me via this
              email below or submitting this form.
            </p>
            <a
              className="paragraph paragraph--is-light paragraph--is-clickable paragraph--is-not-spaced"
              id="openEmail"
              title="Contact me"
            >
              <i className="far fa-envelope"></i> moetez.ayari@esprit.tn
            </a>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="contactForm">
                  <form
                    ref={form}
                    id="contact-form"
                    //onSubmit={handleSubmit(onSubmit)}
                    noValidate
                  >
                    <div className="row formRow">
                      <div className="col-6">
                        <input
                          type="text"
                          name="name"
                          className="form-control formInput"
                          placeholder="Name"
                          onChange={handleChange}
                        ></input>
                        {submited && !formIsValid.name ? (
                          <p
                            style={{
                              color: "#f44336",
                              fontSize: " 16px",
                              marginBottom: "-4%",
                            }}
                          >
                            please enter your name
                          </p>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="col-6">
                        <input
                          type="email"
                          name="email"
                          className="form-control formInput"
                          placeholder="Email address"
                          onChange={handleChange}
                        ></input>
                        {submited && email === "" ? (
                          <p
                            className="warning"
                            style={{
                              color: "#f44336",
                              fontSize: " 16px",
                              marginBottom: "-4%",
                            }}
                          >
                            please enter your email
                          </p>
                        ) : (
                          <>
                            {submited && !formIsValid.email ? (
                              <p
                                style={{
                                  color: "#f44336",
                                  fontSize: " 16px",
                                  marginBottom: "-4%",
                                }}
                              >
                                Enter a correct email
                              </p>
                            ) : (
                              <></>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    <div className="row formRow">
                      <div className="col">
                        <input
                          type="text"
                          name="subject"
                          className="form-control formInput"
                          placeholder="Subject"
                          onChange={handleChange}
                        ></input>
                        {submited && !formIsValid.subject ? (
                          <p
                            style={{
                              color: "#f44336",
                              fontSize: " 16px",
                              marginBottom: "-2%",
                            }}
                          >
                            please enter your subject
                          </p>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div className="row formRow">
                      <div className="col">
                        <textarea
                          rows={3}
                          name="message"
                          className="form-control formInput"
                          placeholder="Message"
                          onChange={handleChange}
                        ></textarea>
                        {submited && !formIsValid.message ? (
                          <p
                            style={{
                              color: "#f44336",
                              fontSize: " 16px",
                              marginBottom: "-2%",
                            }}
                          >
                            please enter your message
                          </p>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>

                    <button
                      className="submit-btn"
                      //disabled={disabled}
                      //type="submit"
                      onClick={handleSubmit}
                      //onClick={handleClickOpen}
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            PaperProps={{
              style: {
                backgroundColor: afterSubmitt.color,
                color: "white",
              },
            }}
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{afterSubmitt.message}</DialogTitle>
            <DialogContent>
              {afterSubmitt.color === "#0782E2" ? (
                <i class="far fa-check-circle"></i>
              ) : (
                <i class="far fa-window-close"></i>
              )}
            </DialogContent>
          </Dialog>
        </div>
        <Footer />
      </ContactSection>
    </Element>
  );
};

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: 24px;
  font-family: "Poppins SemiBold";
  background: rgba(0, 150, 255, 0.8);
  @media screen and (min-width: 1920px) {
    height: 800px;
  }
  form {
    margin-top: 20px;
  }

  .formRow {
    margin: 10px 0 20px 0;
  }

  .formInput {
    padding: 15px 10px;
    border: 1.6px solid rgba(45, 53, 62);
    background: rgba(31, 39, 49);
    box-shadow: 0 0 0 1px white;
    border: none;
    color: #f0f8ff;
  }

  .formInput:focus {
    background-color: var(--dark);
    outline: none;
    box-shadow: 0 0 0 2px #3848a2;
    color: var(--light);
  }

  .formInput::placeholder {
    color: #0782e2;
    opacity: 1;
  }

  .formInput:focus::placeholder {
    color: var(--light);
    opacity: 1;
  }

  .errorMessage {
    color: #f45532;
    font-size: 14px;
    margin: 0;
    padding: 0;
  }

  #notifyToast {
    color: #fff;
    border-radius: 6px;
    width: 200px;
    margin-left: 75px;
    background-color: #3848a2;
  }

  .submit-btn {
    background-color: #3848a2;
    color: white !important;
    padding: 15px 50px;
    border: 2px solid #3848a2;
    border-radius: 10px;
    margin-bottom: 25px;
    text-align: center;
    @media screen and (max-width: 650px) {
      height: 50px;
      width: 100px;
      padding: 0px;
      font-size: 14px;
    }
  }

  .submit-btn:hover {
    background-color: cornsilk;
    color: var(--dark) !important;
    border: 2px solid #3848a2;
  }

  .submit-btn:disabled:hover {
    background-color: var(--dark);
    color: #3848a2 !important;
    cursor: wait;
  }
  .container {
    h1 {
      font-weight: 500;
      font-size: 60px;
      line-height: 74.4px;
      color: white;
      @media screen and (max-width: 650px) {
        font-weight: 700;
        font-size: 40px;
      }
    }
    .paragraph {
      @media screen and (max-width: 650px) {
        fontsize: " 18px";
      }
    }
  }
  .container h1,
  h3,
  p,
  a {
    color: white;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .submit-message {
      width: 125px;
      margin-left: 200px;
    }
  }
`;

export default ContactMe;
