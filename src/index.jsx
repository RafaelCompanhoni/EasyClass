import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import logger from 'redux-logger';
import 'babel-polyfill';
import reducers from './reducers';
import history from './history';

import LoginContainer from './components/Login/LoginContainer';
import Dashboard from './components/shared/Dashboard';
import UserContainer from './components/User/UserContainer';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
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
  </Provider>,
  document.getElementById('root'),
);
