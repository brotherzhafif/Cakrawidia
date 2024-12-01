import React from "react";

const Button = ({ text, onClick, color = 'primary', size = 'md', disabled = false }) => {
    const baseClass = 'font-bold rounded focus:outline-none ';
    const sizeClass = size === 'sm' ? 'px-2 py-1 text-sm' : size === 'lg' ? 'px-6 py-3 text-lg' : size === 'home' ? 'px-80 py-3' : 'px-4 py-2';
  
    // Menambahkan warna berdasarkan props color
    const colorClass = `bg-${color} hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded`;
  
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
    return (
      <button
        onClick={onClick}
        className={`${baseClass} ${sizeClass} ${colorClass} ${disabledClass}`}
        disabled={disabled}
      >
        {text}
      </button>
    );
  };

  
export default Button;