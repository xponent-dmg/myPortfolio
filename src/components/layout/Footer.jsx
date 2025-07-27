import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? "dark" : "light"}`}>
      <div className="footer-container">
        <p className={`footer-main ${darkMode ? "dark" : "light"}`}>
          © 2025 Harishankar R. Built with React and lots of ☕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
