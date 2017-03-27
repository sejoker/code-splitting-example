import React from "react";
import { render } from "react-dom";
import "./app.css";
import "./button.css";
import App from "./components/App";
import fetchDependencies from "./modulesResolver";
import { moduleCode, moduleTabs } from "./modules";

fetchDependencies([moduleCode, moduleTabs]).then(() => renderApp());

function renderApp() {
  render(<App />, document.getElementById("root"));
}
