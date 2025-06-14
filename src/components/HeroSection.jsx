import React from "react";
import "../App.css";

const HeroSection = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight * 0.8, 
      behavior: "smooth",
    });
  };

  return (
    <div className="heading-container">
      <h2 className="main-heading">
        Memory <span className="highlight">Fragmentation</span> Visualizer
      </h2>
      <div className="scroll-button">
        <div className="mouse" onClick={handleScroll} style={{ cursor: "pointer" }}>
          <div className="scroll-dot"></div>
        </div>
        <div className="scroll-text">SCROLL DOWN</div>
      </div>
    </div>
  );
};

export default HeroSection;
