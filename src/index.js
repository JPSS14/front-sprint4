import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './GlobalStyle';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
    <GlobalStyle/>
    <App />
  </>,
  document.getElementById('root')
);
reportWebVitals();