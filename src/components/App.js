import React, { Component } from "react";
import { render } from "react-dom";
import EntryFactory from "../EntryFactory";
import { moduleCode, moduleTabs, moduleEmpty } from "../modules";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      module: moduleEmpty
    };
    this.loadCodeModule = this.loadCodeModule.bind(this);
    this.loadTabsModule = this.loadTabsModule.bind(this);
  }

  render() {
    return (
      <div>
        <h2>Components code-splitting example</h2>
        <button onClick={this.loadCodeModule}>
          Load code component
        </button>
        <button onClick={this.loadTabsModule}>
          Load tabs component
        </button>
        <EntryFactory module={this.state.module} />
      </div>
    );
  }

  loadCodeModule() {
    this.loadModule(moduleCode);
  }

  loadTabsModule() {
    this.loadModule(moduleTabs);
  }

  loadModule(module) {
    this.setState({ module });
  }
}
