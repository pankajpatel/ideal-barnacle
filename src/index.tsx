import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <App />
  </React.StrictMode>
);
