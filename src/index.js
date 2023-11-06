import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";

import "./styles/reset.css";
import "./styles/index.css";
import "./styles/fonts.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
