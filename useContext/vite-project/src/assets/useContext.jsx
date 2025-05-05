// UserContext.js
import React, { createContext, useState, useContext } from "react";

// Create context for user
export const UserContext = createContext();

// Create a provider for user context
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  const updateUser = (name, email) => {
    setUser({ name, email });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
export const useUser = () => {
  return useContext(UserContext);
};
