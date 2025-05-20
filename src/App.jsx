import React, { useState } from "react";
import axios from "axios";
import MemoryBlock from "./components/MemoryBlock";
// import FrameworkCards from './components/FrameworkCards';
import "./App.css";

function App() {
  const [memoryBlocks, setMemoryBlocks] = useState([
    { size: 100, allocated: null },
    { size: 200, allocated: null },
    { size: 300, allocated: null },
    { size: 400, allocated: null },
    { size: 500, allocated: null },
    { size: 600, allocated: null },
    { size: 700, allocated: null },
    { size: 800, allocated: null },
    { size: 900, allocated: null },
    { size: 1000, allocated: null },
    { size: 2000, allocated: null },
  ]);

  const [processes, setProcesses] = useState([]);
  const [processSize, setProcessSize] = useState("");
  const [algorithm, setAlgorithm] = useState("firstFit");
  const [allocationInfo, setAllocationInfo] = useState([]);

  const handleAddProcess = async () => {
    const size = parseInt(processSize);
    if (size && size > 0) {
      const pid = `P${processes.length + 1}`;
      const newProcess = {
        pid,
        size,
      };

      // Send the new process to the backend
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/api/add_process",
          newProcess
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error adding process:", error);
      }

      setProcesses([...processes, newProcess]);
      setProcessSize("");
    }
  };

  const resetMemory = () => {
    setMemoryBlocks(
      memoryBlocks.map((block) => ({ ...block, allocated: null }))
    );
    setProcesses([]);
    setAllocationInfo([]);
  };

  const allocateMemory = async () => {
    // let info = [];

    const allocationData = processes.map((proc) => {
      return {
        pid: proc.pid,
        size: proc.size,
        algorithm: algorithm,
      };
    });

    // Send allocation request to the backend
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/allocate_memory",
        allocationData
      );
      setMemoryBlocks(response.data.memoryBlocks);
      setAllocationInfo(response.data.allocationInfo);
    } catch (error) {
      console.error("Error allocating memory:", error);
    }
  };

  return (
    <div className="App">
      <div className="heading-container">
        <h2 className="main-heading">
          Memory <span className="highlight">Fragmentation</span> Visualizer
        </h2>
        <div class="scroll-button">
          <div class="mouse">
            <div class="scroll-dot"></div>
          </div>
          <div class="scroll-text">SCROLL</div>
        </div>
      </div>
      <div className="details-about-Visualizer">
        <div className="text-container">
          <p>A Memory Fragmentation Visualizer is a tool designed to graphically represent how memory is allocated and used within a system, highlighting the presence and extent of fragmentation. It provides a visual layout of memory blocks, showing allocated, free, and fragmented regions, making it easier to understand how inefficient memory usage can occur over time due to allocation and deallocation patterns.</p>
        </div>
      </div>
      <div className="controls">
        <input
          type="number"
          value={processSize}
          placeholder="Enter Process Size (MB)"
          onChange={(e) => setProcessSize(e.target.value)}
        />
        <button onClick={handleAddProcess}>Add Process</button>

        <select
          onChange={(e) => setAlgorithm(e.target.value)}
          value={algorithm}
        >
          <option value="firstFit">First Fit</option>
          <option value="bestFit">Best Fit</option>
          <option value="worstFit">Worst Fit</option>
        </select>

        <button onClick={allocateMemory}>Allocate</button>
        <button onClick={resetMemory}>Reset</button>
      </div>

      <div className="process-list">
        <strong>Processes:</strong>{" "}
        {processes.length > 0
          ? processes.map((p) => `${p.pid}(${p.size}MB)`).join(", ")
          : "None"}
      </div>

      <div className="memory-container">
        {memoryBlocks.map((block, idx) => (
          <div key={idx} className="block-group">
            {block.allocated !== null ? (
              <>
                <MemoryBlock
                  size={block.allocated}
                  label={`${block.allocated} MB`}
                  type="allocated"
                />
                {block.size - block.allocated > 0 && (
                  <MemoryBlock
                    size={block.size - block.allocated}
                    label={`${block.size - block.allocated} MB`}
                    type="internal"
                  />
                )}
              </>
            ) : (
              <MemoryBlock
                size={block.size}
                label={`${block.size} MB`}
                type="free"
              />
            )}
          </div>
        ))}
      </div>

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
    </div>
  );
}

export default App;
