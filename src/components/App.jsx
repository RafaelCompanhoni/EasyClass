import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import LoginContainer from './Login/LoginContainer';
import Dashboard from './shared/Dashboard';
import UserContainer from './User/UserContainer';

const App = () => (
  <div>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Dashboard>
          <Route component={() => (
            <div>
              <Route path="/users" component={UserContainer} />
              <Route path="/other" component={LoginContainer} />
            </div>
          )}
          />
        </Dashboard>
      </Switch>
    </Router>
  </div>
);

export default App;
