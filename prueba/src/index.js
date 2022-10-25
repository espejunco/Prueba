
import React from 'react';
import ReactDOM from 'react-dom';
import Topbar from './components/topbar';
import App from "../src/containers/routes/routes";

ReactDOM.render(
  <React.StrictMode>
    <Topbar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);