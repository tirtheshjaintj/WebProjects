// src/components/RoastDisplay.tsx
import React from 'react';

interface RoastDisplayProps {
  roast: string;
  username:string;
}

const RoastDisplay: React.FC<RoastDisplayProps> = ({ roast ,username}) => {
  return (
    <div className=" mx-auto mt-10 p-1 bg-dark-800 rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Roasted Message 🔥</h2>
      <pre className="mt-4 text-white text-lg whitespace-pre-wrap">{"@"+username+"\n"}{roast}</pre>
    </div>
  );
};

export default RoastDisplay;
