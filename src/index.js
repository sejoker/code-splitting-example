import React from 'react';
import { render } from 'react-dom';
import './app.css';
import EntryFactory from './EntryFactory';
import fetchDependencies from './modulesResolver';

const moduleCode = {
  content_type: 'code',
  items: [],
  content: {}
};

const moduleTabs = {
  content_type: 'tabs',
  items: [],
  content: {}
};

const moduleEmpty = {
  content_type: 'empty',
  items: [],
  content: {}
};

fetchDependencies([moduleCode, moduleTabs]).then(() => renderApp());

function renderApp() {
  const Header = <h1>Hacks: React!</h1>;
  const App = <div>{Header}<EntryFactory module={getModule()} /></div>;
  render(App, document.getElementById('root'));
}

function getModule() {
  const { pathname: path } = location;
  if (path === '/tabs') {
    return moduleTabs;
  } else if (path === '/code') {
    return moduleCode;
  } else
    return moduleEmpty;
}
