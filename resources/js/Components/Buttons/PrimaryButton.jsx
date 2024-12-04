import React from 'react';

const PrimaryButton = ({ label, onClick, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center btn-outline  bg-secondary text-primary rounded-full font-bold ${className}`}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
