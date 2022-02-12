import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

export default function Root(props) {
  return (
    <BrowserRouter basename={'/gallery'}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  );
}
