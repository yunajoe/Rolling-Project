import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";

import './assets/styles//reset.css';
import './assets/styles/index.css';
import './assets/styles/fonts.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
