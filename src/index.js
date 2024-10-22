// src/index.js  
import React from 'react';  
import ReactDOM from 'react-dom/client';  
import App from './Portfolio'; // Import the main App component  
import './Portfolio.css'; // Optional: Global styles  

// Create a root for rendering  
const root = ReactDOM.createRoot(document.getElementById('root'));  

// Render the App component into the root  
root.render(  
  <React.StrictMode>  
    <App />  
  </React.StrictMode>  
);

