import React from 'react';

export default function CardBase({ width, height, children }) {
  return (
    <div
      className="bg-gray-400/30 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-6 transition-all duration-300"
      style={{ width, height }}
    >
      {children}
    </div>
  );
}

