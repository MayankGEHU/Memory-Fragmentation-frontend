import React from "react";
import "./AlgorithmUse.css";

const AlgorithmUse = () => {
  return (
    <section className="algorithm-use-wrapper">
      <div className="algorithm-header">
        <h2>
          <span className="highlight-algo">Algorithms</span> used for
          fragmentation visualization.
        </h2>
      </div>

      <div className="algorithm-description">
        <p>
          Memory Allocation Algorithms are techniques used by an operating
          system to manage how memory is distributed to processes in a computer
          system. These algorithms decide where and how memory will be
          allocated to optimize performance and reduce fragmentation.
        </p>
        <ol>
          <li>First Fit</li>
          <li>Best Fit</li>
          <li>Worst Fit</li>
        </ol>

        <div className="project-requirements">
          <h3>1: First Fit</h3>
          <p>
            The first-fit algorithm searches for the first free partition that is large enough to accommodate the process. The operating system starts searching from the beginning of the memory and allocates the first free partition that is large enough to fit the process.
          </p>
          <h3>2: Best Fit</h3>
          <p>
            The best-fit algorithm searches for the smallest free partition that is large enough to accommodate the process. The operating system searches the entire memory and selects the free partition that is closest in size to the process.
          </p>
          <h3>3: Worst Fit</h3>
          <p>
            The worst-fit algorithm searches for the largest free partition and allocates the process to it. This algorithm is designed to leave the largest possible free partition for future use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AlgorithmUse;
