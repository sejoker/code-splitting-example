import React, { Component } from "react";
import { render } from "react-dom";
import EntryFactory from "../EntryFactory";
import { moduleCode, moduleTabs, moduleEmpty } from "../modules";
import { ButtonGroup, Button } from "cf-component-button";

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
        <h2>Code-splitting example</h2>
        <ButtonGroup>
          <Button type="primary" onClick={this.loadCodeModule}>
            Load code component
          </Button>
          <Button type="default" onClick={this.loadTabsModule}>
            Load tabs component
          </Button>
        </ButtonGroup>
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
