import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./assets/styles/fonts.css";
import "./assets/styles/index.css";
import "./assets/styles/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);