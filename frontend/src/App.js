import AppLayoutConnected from 'AppLayoutConnected';
import Home from 'pages/Home';
import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <AppLayoutConnected>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </AppLayoutConnected>
    </Router>
  );
}
