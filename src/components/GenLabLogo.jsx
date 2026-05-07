import React from 'react';

const GenLabLogo = ({ className = '', width = "100%", height = "100%", fill = "currentColor", style }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Top Left: Semi-circle flat on the right */}
      <path d="M 50 0 A 25 25 0 0 0 50 50 Z" fill={fill} />
      {/* Top Right: Semi-circle flat on the top */}
      <path d="M 100 0 A 25 25 0 0 0 50 0 Z" fill={fill} />
      {/* Bottom Left: Semi-circle flat on the top */}
      <path d="M 50 50 A 25 25 0 0 0 0 50 Z" fill={fill} />
      {/* Bottom Right: Semi-circle flat on the left */}
      <path d="M 50 100 A 25 25 0 0 0 50 50 Z" fill={fill} />
    </svg>
  );
};

export default GenLabLogo;
