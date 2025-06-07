import React from "react";
import "../App.css";

const ControlsPanel = ({
  processSize,
  setProcessSize,
  handleAddProcess,
  algorithm,
  setAlgorithm,
  allocateMemory,
  resetMemory,
}) => (
  <div className="controls">
    <input
      type="number"
      value={processSize}
      placeholder="Enter Process Size (MB)"
      onChange={(e) => setProcessSize(e.target.value)}
    />
    <button onClick={handleAddProcess}>Add Process</button>

    <select onChange={(e) => setAlgorithm(e.target.value)} value={algorithm}>
      <option value="firstFit">First Fit</option>
      <option value="bestFit">Best Fit</option>
      <option value="worstFit">Worst Fit</option>
    </select>

    <button onClick={allocateMemory}>Allocate</button>
    <button onClick={resetMemory}>Reset</button>
  </div>
);

export default ControlsPanel;
