import React, { useState } from "react";
import {
  Navigation,
  Footer,
  Hero,
  About,
  Skills,
  Projects,
  Music,
  Contact,
} from "./components";
import { useScrollSection } from "./hooks/useScrollSection";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { activeSection, scrollToSection } = useScrollSection();

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Enhanced scroll to section that also closes mobile menu
  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}>
      {/* Navigation */}
      <Navigation
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection={activeSection}
        scrollToSection={handleScrollToSection}
      />

      {/* Hero Section */}
      <Hero darkMode={darkMode} scrollToSection={handleScrollToSection} />

      {/* About Section */}
      <About darkMode={darkMode} />

      {/* Skills Section */}
      <Skills darkMode={darkMode} />

      {/* Projects Section */}
      <Projects darkMode={darkMode} />

      {/* Music Section */}
      {/* <Music darkMode={darkMode} /> */}

      {/* Contact Section */}
      <Contact darkMode={darkMode} />

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
