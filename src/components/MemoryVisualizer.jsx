import React from "react";
import MemoryBlock from "./MemoryBlock";
import "../App.css";

const MemoryVisualizer = ({ memoryBlocks }) => (
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
);

export default MemoryVisualizer;
