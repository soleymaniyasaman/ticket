import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyProvider from './context/main-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>
);

reportWebVitals();
