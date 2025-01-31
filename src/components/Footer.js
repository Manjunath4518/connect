import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome icons
import "./Footer.css";  // Make sure the CSS file is correctly imported

const Footer = () => {
  return (
    <footer className="footer">  {/* Ensure the 'footer' class is applied correctly */}
      <div className="container mx-auto">
        <p className="footer-title">Networking & Connections Club</p>
        
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <p className="footer-text">© {new Date().getFullYear()} Networking & Connections Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
