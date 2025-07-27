import React from "react";
import { skillCategories } from "../../data/skills";

const Skills = ({ darkMode }) => {
  return (
    <section
      id="skills"
      className={`section alt ${darkMode ? "dark" : "light"}`}>
      <div className="section-container-lg">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`skill-card ${darkMode ? "dark" : "light"}`}>
              <h3 className={`skill-card-title ${darkMode ? "dark" : "light"}`}>
                {category.title}
              </h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
