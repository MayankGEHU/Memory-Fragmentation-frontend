import React from "react";
import "../App.css";

const PageTable = ({ allocationInfo }) => (
  <div className="page-table">
    <h3>Allocation Page Table</h3>
    {allocationInfo.length === 0 ? (
      <p>No allocations yet.</p>
    ) : (
      <table>
        <thead>
          <tr>
            <th>Process</th>
            <th>Allocated Block #</th>
            <th>Used (MB)</th>
            <th>Block Size (MB)</th>
            <th>Fragmentation (MB)</th>
          </tr>
        </thead>
        <tbody>
          {allocationInfo.map((info, idx) => (
            <tr key={idx}>
              <td>{info.pid}</td>
              <td>{info.blockIndex + 1}</td>
              <td>{info.used}</td>
              <td>{info.totalBlock}</td>
              <td>{info.internalFragmentation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

export default PageTable;
