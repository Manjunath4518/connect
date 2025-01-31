import React from "react";
import "./AboutUs.css"; // Import the CSS for About Us page

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-container">
        <h1 className="about-us-title">About Us</h1>
        <p className="about-us-text">
          We are the Networking & Connections Club, a group dedicated to bringing together individuals passionate about technology, innovation, and collaboration.
        </p>
        <h2 className="about-us-subtitle">Our Mission</h2>
        <p className="about-us-text">
          Our mission is to create a platform for learning, sharing, and networking through workshops, events, and meetups that foster innovation and collaboration.
        </p>
        <h2 className="about-us-subtitle">Our Values</h2>
        <ul className="about-us-list">
          <li>Innovation</li>
          <li>Collaboration</li>
          <li>Learning</li>
          <li>Networking</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
