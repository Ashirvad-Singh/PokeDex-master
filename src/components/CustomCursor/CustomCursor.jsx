import React, { useState } from 'react';
import './CustomCursor.css'; 
const CustomCursor = () => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, 500);
  };

  return (
    <div
      className={`custom-cursor ${expanded ? 'expanded' : ''}`}
      onClick={handleClick}
    ></div>
  );
};

export default CustomCursor;
