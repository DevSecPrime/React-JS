import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<BrowserRouter> --> tag is used to link different pages/components with broswer
  //routes --> paths of the differenet pages/components which are linked via <BrowserRouter>
  <BrowserRouter>

    <App />
  </BrowserRouter>

);

