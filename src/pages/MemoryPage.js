import React, { useState } from "react";
import ControlsPanel from "../components/ControlsPanel";
import ProcessList from "../components/ProcessList";
import MemoryVisualizer from "../components/MemoryVisualizer";
import PageTable from "../components/PageTable";
import axios from "axios";

function MemoryPage() {
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
      const newProcess = { pid, size };

      try {
        await axios.post("http://127.0.0.1:5000/api/add_process", newProcess);
      } catch (error) {
        console.error("Error adding process:", error);
      }

      setProcesses([...processes, newProcess]);
      setProcessSize("");
    }
  };

  const resetMemory = () => {
    setMemoryBlocks(memoryBlocks.map((block) => ({ ...block, allocated: null })));
    setProcesses([]);
    setAllocationInfo([]);
  };

  const allocateMemory = async () => {
    const allocationData = processes.map((proc) => ({
      pid: proc.pid,
      size: proc.size,
      algorithm: algorithm,
    }));

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/allocate_memory", allocationData);
      setMemoryBlocks(response.data.memoryBlocks);
      setAllocationInfo(response.data.allocationInfo);
    } catch (error) {
      console.error("Error allocating memory:", error);
    }
  };

  return (
    <div className="memory-page">
      <div className="heading-container">
      <h1 style={{ marginTop: '153px' }}>Explore System Memory: Allocated, Free, and Fragmented Blocks</h1>
      </div>

      <ControlsPanel
        processSize={processSize}
        setProcessSize={setProcessSize}
        handleAddProcess={handleAddProcess}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        allocateMemory={allocateMemory}
        resetMemory={resetMemory}
      />

      <ProcessList processes={processes} />
      <MemoryVisualizer memoryBlocks={memoryBlocks} />
      <PageTable allocationInfo={allocationInfo} />
    </div>
  );
}

export default MemoryPage;
