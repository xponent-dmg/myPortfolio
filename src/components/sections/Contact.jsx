import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Mail,
  MapPin,
} from "lucide-react";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (integrate with your preferred service)
    console.log("Form submitted:", formData);
    alert("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section">
      <div className="section-container">
        <h2 className="section-title">Let's Connect</h2>

        <div className="contact-grid">
          {/* Contact Form */}
          <div>
            <h3 className="contact-form-title">Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`form-input ${darkMode ? "dark" : "light"}`}
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`form-input ${darkMode ? "dark" : "light"}`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`form-textarea ${darkMode ? "dark" : "light"}`}
                  placeholder="Your message..."
                />
              </div>

              <button type="submit" className="form-submit">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div>
            <h3 className="contact-info-title">Get In Touch</h3>
            <p className="contact-info-text">
              I'm always excited to collaborate on interesting projects or just
              have a chat about technology and music. Feel free to reach out!
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <Mail className="contact-detail-icon" />
                <span>harishankar.r2102@gmail.com</span>
              </div>
              <div className="contact-detail">
                <MapPin className="contact-detail-icon" />
                <span>India</span>
              </div>
            </div>

            <div className="social-section">
              <h4 className="social-title">Follow Me</h4>
              <div className="social-links">
                <a
                  href="https://github.com/xponent-dmg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link github">
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/harishankar-r216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin">
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link youtube">
                  <Youtube size={20} />
                </a>
                <a
                  href="https://instagram.com/xponent.dmg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
