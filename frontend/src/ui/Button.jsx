 import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button 
      {...props} 
      style={{ padding: '10px', background: '#6366f1', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', ...props.style }}
    >
      {children}
    </button>
  );
};

export default Button; // Ye line check karein, honi chahiye!