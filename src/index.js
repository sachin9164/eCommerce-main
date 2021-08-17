import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles.scss";

import App from "./components/App";
import store from "./store";

function AppWithStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWithStore />, rootElement);
