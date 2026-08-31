import React from 'react';

function CustomButton({ onClick, children, type = "button", style = {} }) {
  return (
    <button 
      type={type}
      onClick={onClick} 
      className="action-btn" /* Standard class name instead of w3-btn */
      style={{ ...style }}
    >
      {children}
    </button>
  );
}

export default CustomButton;
