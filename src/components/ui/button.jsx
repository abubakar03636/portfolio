// src/components/ui/button.jsx
import React from 'react';

export const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-red rounded hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
};
