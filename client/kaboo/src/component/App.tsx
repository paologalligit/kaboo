import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Login from './Login';
import Home from './Home';
import PrivateRoute from '../container/PrivateRoute';

function App() {
  const history = createBrowserHistory()

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute>
          <Route path="/home" component={Home} />
        </PrivateRoute>
      </Switch>
    </Router>

  );
}

export default App;
