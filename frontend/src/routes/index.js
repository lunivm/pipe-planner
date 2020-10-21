import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoggedIn from '../layouts/logged-in';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import Vehicles from './Vehicles';

export default function Routes() {
  return (
    <Router>
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
