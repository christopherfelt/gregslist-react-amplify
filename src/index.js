import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import { CarProvider } from "./context/CarState";

Amplify.configure(aws_exports);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CarProvider>
        <App />
      </CarProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
