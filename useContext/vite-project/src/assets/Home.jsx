import React, { useContext } from "react";
import { loggedIn } from "/components/Component.js";

function Home() {
  const { isLoggedIn, setIsLoggedIn } = useContext(loggedIn);

  const toggleLogin = () => setIsLoggedIn(prev => !prev);

  return (
    <div className="navbar text-white bg-gray-800 p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <p className="mb-4">User is {isLoggedIn ? "Logged In" : "Logged Out"}</p>
      <button
        onClick={toggleLogin}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Toggle Login State
      </button>
    </div>
  );
}

export default Home;
