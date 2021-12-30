import Modal from "./Modal";
import "./ProjectContainer.css";
import React, { useState } from "react";

const ProjectContainer = ({ project }) => {
  const [open, setOpen] = useState(false);
  const HandleChange = (change) => {
    setOpen(change);
  };
  console.log(open);
  return (
    <div class="container_project">
      <div class="content_project">
        <div className="headercontainer">
          <h3 className=" header3">{project.name}</h3>
        </div>
        <p className="paragraph1">{project.description}</p>
        <ul className="project__stack">
          {project.stack.map((item) => (
            <li className="project__stack-item">{item}</li>
          ))}
        </ul>
      </div>

      <div className="sources">
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label="source code"
            className="link link--icon"
            target="_blank"
          >
            <i className="fab fa-github navigation__social-icon"></i>
          </a>
        )}
        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label="source code"
            className="link link--icon"
            target="_blank"
          >
            <i className="fab fa-youtube navigation__social-icon"></i>
          </a>
        )}
        {project.fullDescription && (
          <i
            className="fas fa-info-circle navigation__social-icon"
            onClick={() => setOpen(true)}
          ></i>
        )}
      </div>
      <Modal project={project} openChangeOpen={HandleChange} openModal={open} />
    </div>
  );
};

export default ProjectContainer;
