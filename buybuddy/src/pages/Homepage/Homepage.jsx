import { useState, useEffect } from "react";

import "./HomePage.css";

function HomePage() {
  return (
    // hero banner
    <div className="hero-container">
      <div className="hero-content-wrapper">
        {/* app title + description */}
        <div className="hero-section-1">
          <div className="hero-content">
            <h1 className="hero-title">Purchasing decisions made easy.</h1>
            <p className="hero-description">
              Save your time, money while you still indulging with retail
              therapy.
            </p>
            <button className="cta-button">Take Control</button>
          </div>
        </div>
      </div>
      {/* photo */}
      <div className="hero-image-wrapper">
        <div className="hero-section-2">
          <div className="hero-image-content">
            <div className="hero-image"></div>
          </div>
        </div>
      </div>
    </div>

    // second section - moving css testiomonials
    // third section - image 1 - usp/features
    // fourth section - image 2 - usp/features
    // fifth section - image 3 - usp/features
    // sixth - cta
  );
}

export default HomePage;
