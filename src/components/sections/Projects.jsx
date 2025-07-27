import React from "react";
import { ExternalLink, Github, Globe } from "lucide-react";
import { projects } from "../../data/projects";

const Projects = ({ darkMode }) => {
  return (
    <section id="projects" className="section">
      <div className="section-container-lg">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${darkMode ? "dark" : "light"}`}>
              {/* Project Image */}
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-image-overlay">
                  <div className="project-action-buttons">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-btn github"
                      title="View on GitHub">
                      <Github size={20} />
                    </a>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-btn website"
                      title="Visit Website">
                      <Globe size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <div className="project-header">
                  <h3
                    className={`project-title ${darkMode ? "dark" : "light"}`}>
                    {project.title}
                  </h3>
                </div>

                <p
                  className={`project-description ${
                    darkMode ? "dark" : "light"
                  }`}>
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`project-tech-tag ${
                        darkMode ? "dark" : "light"
                      }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
