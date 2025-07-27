import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = ({ darkMode, scrollToSection }) => {
  return (
    <section id="home" className="hero">
      {/* Background Animation */}
      <div className="hero-bg">
        <div className="hero-bg-circle1"></div>
        <div className="hero-bg-circle2"></div>
        <div className="hero-bg-circle3"></div>
      </div>

      <div className="hero-content">
        {/* Profile Image Placeholder */}
        <div className="hero-avatar">
          <div className={`hero-avatar-circle ${darkMode ? "dark" : "light"}`}>
            HR
          </div>
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="hero-title-name">Harishankar R.</span>
        </h1>

        <p className="hero-subtitle">
          Singer-songwriter & Full-stack Developer
        </p>

        <button
          onClick={() => scrollToSection("projects")}
          className="hero-cta">
          View My Work
          <ChevronDown className="hero-cta-icon" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <ChevronDown className="hero-scroll-icon" />
      </div>
    </section>
  );
};

export default Hero;
