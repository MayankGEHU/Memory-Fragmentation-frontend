import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./VisualizerDescription.css";

const VisualizerDescription = () => (
  <div className="details-about-Visualizer">
    <div className="text-lottie-wrapper">
      <div className="lottie-container">
        <DotLottieReact
          src="https://lottie.host/8317bdad-8189-48ca-beee-e93717572cce/w9audmJunO.lottie"
          loop
          autoplay
        />
      </div>
      <div className="text-container">
        <p className="pera">
          A Memory Fragmentation Visualizer is a tool designed to graphically
          represent how memory is allocated and used within a system,
          highlighting the presence and extent of fragmentation. It provides a
          visual layout of memory blocks, showing allocated, free, and
          fragmented regions, making it easier to understand how inefficient
          memory usage can occur over time due to allocation and deallocation
          patterns.
        </p>
      </div>
    </div>
  </div>
);

export default VisualizerDescription;
