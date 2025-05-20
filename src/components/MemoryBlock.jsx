function MemoryBlock({ size, label, type }) {
  return (
    <div className={`memory-block ${type}`}>
      <span>{label}</span>
    </div>
  );
}

export default MemoryBlock;
