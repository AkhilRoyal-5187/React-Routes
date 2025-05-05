import React, { useContext } from "react";
import { contextCounter, contextBg } from "/components/Component.js";

function Navbar() {
  const { count, setCount } = useContext(contextCounter);
  const { color, setColor } = useContext(contextBg);

  const toggleColor = () => {
    setColor(prev => (prev === 'white' ? 'blue' : 'white'));
  };

  return (
    <div className={`navbar text-white ${color === 'white' ? 'bg-gray-600' : 'bg-blue-800'} p-4`}>
      <h1 className="text-2xl font-bold mb-2">Navbar</h1>
      <h2 className="mb-4">Count: {count}</h2>

      <button 
        onClick={toggleColor} 
        className="bg-white text-black px-4 py-2 rounded mb-2"
      >
        Change Mode
      </button>
      <br />

      <button 
        onClick={() => setCount(prev => prev + 1)} 
        className="bg-white text-black px-4 py-2 rounded mt-2"
      >
        Increment Count
      </button>
    </div>
  );
}

export default Navbar;
