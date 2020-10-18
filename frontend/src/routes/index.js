import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import LoggedIn from '../layouts/logged-in';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import Vehicles from './Vehicles';
import { history } from '../redux/store';

export default function Routes() {
  return (
    <Router history={history}>
      <LoggedIn>
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard/>
          </Route>

          <Route exact path="/vehicles">
            <Vehicles/>
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </LoggedIn>
    </Router>
  );
}
