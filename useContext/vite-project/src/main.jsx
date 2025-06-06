import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element with ID 'root' not found in the document.");
}

const reactRoot = ReactDOM.createRoot(rootElement);
reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
