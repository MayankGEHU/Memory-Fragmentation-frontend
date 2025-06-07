import React from 'react';
import './TemplatesShowcase.css';
import { useNavigate } from 'react-router-dom';

// //'First-fit', 'AI', 'Portfolio', 'SaaS', 'Multi-tenant App'
const TemplatesShowcase = () => {
  const navigate = useNavigate();

  return (
    <div className="template-container">
      <div className="tags">
        {['Memory', 'Os'].map((tag, index) => (
          <span key={index} className={`tag tag-${tag.toLowerCase().replace(/ /g, '-')}`}>{tag}</span>
        ))}
      </div>

      <h1 className="template-heading">Try Memory Freg With me</h1>
      <p className="template-subheading">
        Visualize how memory is allocated, used, and fragmented in real-time with our Memory Fragmentation Visualizer.
      </p>

      <button className="deploy-button" onClick={() => navigate('/memory')}>
        Try Now <span className="arrow">↗</span>
      </button>
    </div>
  );
};

export default TemplatesShowcase;
