import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// npm i styled-reset
import { Reset } from 'styled-reset'

const root = ReactDOM.createRoot(document.getElementById('root'));
// React.StrictMode가 뭐지?

  root.render(
    <React.StrictMode>
    <Reset />
      <App />
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();