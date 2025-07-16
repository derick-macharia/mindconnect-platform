import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional if your project includes it
import App from './App'; // This assumes App.js exists in the same folder

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

