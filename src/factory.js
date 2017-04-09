import React from "react";
import Link from './components/link/LinkComponent';
import Page from './components/page/PageComponent';

export const promises = {};

const modules = {};

// Polyfill require.ensure
if (typeof require.ensure !== "function")
  require.ensure = function(d, c) {
    c(require);
  };

export default {
  code: () => {
    const key = "code";
    if (modules[key]) return modules[key];
    if (!promises[key]) {
      promises[key] = import(
        "./components/code/CodeComponent"
      ).then(CodeComponent => {
        modules[key] = CodeComponent.default;
        return CodeComponent.default;
      });
    }
    return promises[key];
  },
  tabs: () => {
    const key = "tabs";
    if (modules[key]) return modules[key];
    if (!promises[key]) {
      promises[key] = new Promise(resolve => {
        require.ensure(
          [],
          require => {
            const TabsComponent = require(
              "./components/tabs/TabsComponent"
            ).default;
            modules[key] = TabsComponent;
            resolve(TabsComponent);
          },
          "tabs"
        );
      });
    }
    return promises[key];
  },
  link: () => Link,
  page: () => Page,
  default: () => () => <div />,
};
