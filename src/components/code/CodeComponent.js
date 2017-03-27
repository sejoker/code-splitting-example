import React, { Component } from "react";
import { Code, CodeBlock } from "cf-component-code";
import "./code.css";

class CodeComponent extends Component {
  render() {
    return (
      <div>
        <p>Look at this <Code>inline code</Code>!</p>
        <CodeBlock>And this code block!</CodeBlock>
      </div>
    );
  }
}

export default CodeComponent;
