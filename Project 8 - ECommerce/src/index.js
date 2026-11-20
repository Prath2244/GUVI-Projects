import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  /* <-- Notice this line is just './App' */
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);