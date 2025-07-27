import React from "react";

const About = ({ darkMode }) => {
  return (
    <section id="about" className="section about-section">
      {/* Background Image */}
      <div className="about-background">
        <img
          src="/api/placeholder/1200/800"
          alt="About background"
          className="about-background-image"
        />
        <div
          className={`about-background-overlay ${
            darkMode ? "dark" : "light"
          }`}></div>
      </div>

      <div className="section-container about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-content">
            <p className="about-text">
              I'm an 18-year-old B.Tech Computer Science Engineering student,
              graduating in 2027. Based in India, I'm passionate about creating
              digital experiences that matter.
            </p>

            <p className="about-text">
              As an aspiring singer-songwriter,I find harmony between music and
              technology. My guitar and code both tell stories, just in
              different languages.
            </p>

            <div className="about-tags">
              <span className={`about-tag blue ${darkMode ? "dark" : "light"}`}>
                UI/UX Design
              </span>
              <span
                className={`about-tag green ${darkMode ? "dark" : "light"}`}>
                AWS Cloud
              </span>
              <span
                className={`about-tag purple ${darkMode ? "dark" : "light"}`}>
                IoT
              </span>
              <span className={`about-tag pink ${darkMode ? "dark" : "light"}`}>
                Music Production
              </span>
            </div>
          </div>

          <div className={`about-facts ${darkMode ? "dark" : "light"}`}>
            <h3 className="about-facts-title">Quick Facts</h3>
            <ul className="about-facts-list">
              <li className="about-fact">
                <span className="about-fact-dot blue"></span>
                Age: 18 years old
              </li>
              <li className="about-fact">
                <span className="about-fact-dot green"></span>
                Education: B.Tech CSE (2027)
              </li>
              <li className="about-fact">
                <span className="about-fact-dot purple"></span>
                Location: India
              </li>
              <li className="about-fact">
                <span className="about-fact-dot pink"></span>
                Instruments: Guitar
              </li>
              <li className="about-fact">
                <span className="about-fact-dot yellow"></span>
                Genres: Pop, Soft Rock
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
