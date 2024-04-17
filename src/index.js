import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./css/custom.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector("body"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
