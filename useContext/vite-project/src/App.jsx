// App.js
import React, { useState } from 'react';
import './App.css';

import { contextCounter, contextBg, loggedIn } from '/components/Component.js';
import Navbar from './assets/Navbar.jsx';
import Dashboard from './assets/Dashboard.jsx';
import Home from './assets/Home.jsx';
import { UserProvider } from './assets/useContext'; // Import UserProvider
import UserForm from './assets/userForm.jsx'; // Import UserForm component

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Page not found</h1>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <h1>Page not found</h1>,
  },
  {
    path: "/navbar",
    element: <Navbar />,
    errorElement: <h1>Page not found</h1>,
  },
  {
    path: "/userform",
    element: <UserForm />, // Add route for UserForm
    errorElement: <h1>Page not found</h1>,
  },
]);

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('white');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserProvider>  {/* Wrap the app with UserProvider to provide user context */}
      <contextCounter.Provider value={{ count, setCount }}>
        <contextBg.Provider value={{ color, setColor }}>
          <loggedIn.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <div className='bg-black min-h-screen'>
              <RouterProvider router={router} />
            </div>
          </loggedIn.Provider>
        </contextBg.Provider>
      </contextCounter.Provider>
    </UserProvider>
  );
}

export default App;
