import React from "react";
import "../App.css";

const HeroSection = () => (
  <div className="heading-container">
    <h2 className="main-heading">
      Memory <span className="highlight">Fragmentation</span> Visualizer
    </h2>
    <div className="scroll-button">
      <div className="mouse">
        <div className="scroll-dot"></div>
      </div>
      <div className="scroll-text">SCROLL DOWN</div>
    </div>
  </div>
);

export default HeroSection;
