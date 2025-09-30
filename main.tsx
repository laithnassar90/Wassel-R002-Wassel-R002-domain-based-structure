import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Optional: Add React.StrictMode in development
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
