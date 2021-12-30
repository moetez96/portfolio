import React, { useState } from "react";
import styled from "styled-components";
import { Route, NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const handleShow = () => {
    setShowLinks(!showLinks);
  };
  return (
    <Navigation>
      <div
        className="container "
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <a className="navigation__brand" href="./">
          <strong>My</strong> Portfolio
        </a>

        <i className="fas fa-bars navigation__menu-toggle" id="toggleMenu"></i>

        <div className="navigation__content" id="menu-toggled">
          <ul className="navigation__list" id={showLinks ? "hidden" : ""}>
            <li className="navigation__list-item">
              <Link
                className="navigation__link"
                spy={true}
                smooth={true}
                duration={500}
                to="profile"
              >
                Home
              </Link>
            </li>
            <li className="navigation__list-item">
              <Link
                className="navigation__link"
                spy={true}
                smooth={true}
                duration={500}
                to="about"
              >
                About
              </Link>
            </li>
            <li className="navigation__list-item">
              <Link
                className="navigation__link"
                spy={true}
                smooth={true}
                duration={500}
                to="projects"
              >
                Projects
              </Link>
            </li>
            <li className="navigation__list-item">
              <Link
                className="navigation__link"
                spy={true}
                smooth={true}
                duration={500}
                to="contact"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="navigation__socials">
            <a
              className="navigation__link"
              href="https://github.com/moetez96"
              rel="noreferrer"
              target="_blank"
              title="Github Repositories"
            >
              <i className="fab fa-github navigation__social-icon"></i>
            </a>
            <a
              className="navigation__link"
              href="https://www.linkedin.com/in/moetez-ayari-22b1031b2/"
              rel="noreferrer"
              target="_blank"
              title="Linkedin Profile"
            >
              <i className="fab fa-linkedin navigation__social-icon"></i>
            </a>
          </div>
          <i class="fas fa-bars bars" onClick={handleShow}></i>
        </div>
      </div>
    </Navigation>
  );
};
const Navigation = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 1.6em 0;
  background: rgba(15, 25, 34,0.5);
}
.navigation__content .bars {
  display: none;
  margin-right: 20px;
  margin-left: 20px;
  color: white;
  font-size: 1em;
  @media screen and (max-width: 550px) {
    display: inline-block;
    }
}

.navigation__link {
  text-decoration: none;
  color: white;
  font-size: clamp(0.5rem, 0.375rem + 0.5vw, 0.75rem);
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  letter-spacing: 0.05em;
  margin: 0;
}
.navigation__link:hover {
  color: white;
}
.navigation__brand {
  text-decoration: none;
  color: white;
  font-size: clamp(0.8rem, 0.7rem + 0.4vw, 1rem);
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  margin: 0;

  b {
    font-weight: 700;
  }
}

.navigation__content {
  float: right;
}
.navigation__content #hidden {
  display: flex;
}
.navigation__content #hidden {
  position: absolute;
  left: 0px;
  top: 75px;
  width: 100%;
  background: rgba(15, 25, 34,0.5);
  display: flex;
  flex-direction:column;
  align-items: center;
  a {
    font-weight: bold;
    font-size:15px;
  }
}
.navigation__list {
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
  vertical-align: top;
  @media screen and (max-width: 550px) {
    display: none;
    }
}

.navigation__list-item {
  display: inline-block;
  margin-right: 1.4em;
}

.navigation__list-item: hover {
  border-bottom: 1px solid white;
}


.navigation__socials {
    display: inline-block;
}

.navigation__social-icon {
  color: white;
  font-size: 1.9em;
  margin-top: -0.08em;
  margin-left: 0.2em;
}

.navigation__menu-toggle {
  color: white;
  font-size: 1.2em;
  float: right;
  cursor: pointer;
  display: none
}
`;
export default Header;
