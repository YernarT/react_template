import React from "react";
import ReactDOM from "react-dom";

import { Provider as ReduxProvider } from "react-redux";
import reduxStore from "@redux/store";

import App from "./App";
import "./index.less";

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);
