import React, { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name, "Email:", email);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Update User Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="Enter your email"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default UserForm;
