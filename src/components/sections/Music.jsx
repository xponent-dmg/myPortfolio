import React from "react";
import { Youtube } from "lucide-react";

const Music = ({ darkMode }) => {
  return (
    <section
      id="music"
      className={`section alt ${darkMode ? "dark" : "light"}`}>
      <div className="section-container">
        <h2 className="section-title">Music & Media</h2>

        <div className="music-content">
          <p className="music-intro">
            Music is where my heart truly beats. As an aspiring
            singer-songwriter, I draw inspiration from pop and soft rock genres,
            crafting melodies that tell stories and connect souls.
          </p>

          <div className={`music-journey ${darkMode ? "dark" : "light"}`}>
            <h3 className="music-journey-title">Musical Journey</h3>
            <div className="music-features">
              <div className="music-feature">
                <span className="music-feature-dot purple"></span>
                <span>Pop & Soft Rock Influences</span>
              </div>
              <div className="music-feature">
                <span className="music-feature-dot pink"></span>
                <span>Singer-Songwriter Focus</span>
              </div>
              <div className="music-feature">
                <span className="music-feature-dot blue"></span>
                <span>Guitar & Vocal Compositions</span>
              </div>
              <div className="music-feature">
                <span className="music-feature-dot green"></span>
                <span>Storytelling Through Music</span>
              </div>
            </div>
          </div>

          {/* Placeholder for embedded content */}
          <div className={`music-embed ${darkMode ? "dark" : "light"}`}>
            <div className="music-embed-icon">
              <span>🎵</span>
            </div>
            <h4 className="music-embed-title">Featured Track Coming Soon</h4>
            <p className={`music-embed-text ${darkMode ? "dark" : ""}`}>
              Spotify/YouTube embed will be placed here
            </p>
          </div>

          <div className="music-links">
            <a
              href="https://youtube.com/@username"
              target="_blank"
              rel="noopener noreferrer"
              className="music-link youtube">
              <Youtube className="music-link-icon" />
              YouTube
            </a>
            <a
              href="https://open.spotify.com/artist/username"
              target="_blank"
              rel="noopener noreferrer"
              className="music-link spotify">
              <span className="music-link-icon">🎧</span>
              Spotify
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
