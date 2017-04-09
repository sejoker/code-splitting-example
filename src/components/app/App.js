import React, { Component } from "react";
import { render } from "react-dom";
import EntryFactory from "../../EntryFactory";
import "./app.css";
import fetchDependencies from "../../modulesResolver";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: {}
    };
  }

  componentDidMount() {
    window.fetch(`http://localhost:3000/api${location.pathname}`)
      .then(response => response.json())
      .then(modules => fetchDependencies([modules])
        .then(() => this.setState({ modules })));

  }

  render() {
    const { modules } = this.state;

    if (!modules.id) {
      return <div>loading ...</div>;
    }

    return (
      <div>
        <h2>Code-splitting example</h2>
        <EntryFactory module={modules} />
      </div>
    );
  }
}
