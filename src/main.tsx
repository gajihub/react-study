import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import emailStore from "@store/index.tsx";
import App from "./App.tsx";
import "./index.css";

const store = createStore(emailStore);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
