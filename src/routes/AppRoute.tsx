import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Dashboard from "../pages/Dashboard";

export const history = createBrowserHistory();

const AppRoute = () => (
    <Router history={history}>
        <Header />
        <Switch>
            <Route exact path="/" component={Dashboard} />
        </Switch>
    </Router>
);

export default AppRoute;
