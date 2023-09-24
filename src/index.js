import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './App.css'; // 이 부분을 추가해줍니다.

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mock/browser");
  worker.start({ onUnhandledRequest: "bypass" });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
