import React from 'react';

function CustomButton({ onClick, children, type = "button", style = {} }) {
  return (
    <button 
      type={type}
      onClick={onClick} 
      className="action-btn"
      style={{ ...style }}
    >
      {children}
    </button>
  );
}

export default CustomButton;
