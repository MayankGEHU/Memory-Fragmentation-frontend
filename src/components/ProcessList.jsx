import React from "react";

const ProcessList = ({ processes }) => (
  <div className="process-list">
    <strong>Processes:</strong>{" "}
    {processes.length > 0
      ? processes.map((p) => `${p.pid}(${p.size}MB)`).join(", ")
      : "None"}
  </div>
);

export default ProcessList;
