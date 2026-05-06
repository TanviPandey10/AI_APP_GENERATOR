 import React from 'react';

const Input = (props) => {
  return (
    <input 
      {...props} 
      style={{
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '100%',
        boxSizing: 'border-box',
        ...props.style
      }}
    />
  );
};

export default Input; // <--- YEH LINE CHECK KAREIN