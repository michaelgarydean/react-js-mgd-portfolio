import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// If you have any other CSS files, import them first
import './index.css';  // For example, if you use it
import './App.scss';   // App.scss should come last if you want it to override others


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
