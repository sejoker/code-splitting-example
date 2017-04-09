import React from "react";
import { render } from "react-dom";
import App from "./components/app/App";
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import useRouterHistory from 'react-router/lib/useRouterHistory';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const history = useRouterHistory(createBrowserHistory)();
const app =(<Router history={history}>
              <Route>
                <Route name="all" component={App} path="*"/>
              </Route>
            </Router>);

render(app, document.getElementById("root"));
