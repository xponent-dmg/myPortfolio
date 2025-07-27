import React from "react";
import { Menu, X } from "lucide-react";

const Navigation = ({
  darkMode,
  toggleDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
  activeSection,
  scrollToSection,
}) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "music", label: "Music" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`nav ${darkMode ? "dark" : "light"}`}>
      <div className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <div className="nav-logo">
            <button
              onClick={() => scrollToSection("home")}
              className="nav-logo button">
              HR
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            <div className="nav-links">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${
                    activeSection === item.id
                      ? `active ${darkMode ? "dark" : "light"}`
                      : ""
                  }`}>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dark mode toggle and mobile menu */}
          <div className="nav-controls">
            <button
              onClick={toggleDarkMode}
              className={`theme-toggle ${darkMode ? "dark" : "light"}`}>
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`mobile-menu-btn ${darkMode ? "dark" : "light"}`}>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`mobile-menu ${darkMode ? "dark" : "light"}`}>
            <div className="mobile-menu-links">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`mobile-menu-link ${
                    activeSection === item.id
                      ? `active ${darkMode ? "dark" : "light"}`
                      : ""
                  }`}>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
