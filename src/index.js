import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import img from './images/Liyue.png';
import { GlobalStyle } from './styles/global';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GlobalStyle image={img} />
    <App />
  </React.StrictMode>
);
