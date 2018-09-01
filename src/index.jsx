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
import Authentication from './components/shared/Authentication';
import { SIGNED_IN } from './actions/types';

import LoginContainer from './components/Login/LoginContainer';
import Dashboard from './components/shared/Dashboard';
import UserContainer from './components/User/UserContainer';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers);

// recovers auth data from local storage if page is reloaded
const token = localStorage.getItem('token');
const user = localStorage.getItem('loggedInUser');
if (token && user) {
  store.dispatch({ type: SIGNED_IN, auth: { token, user } });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Dashboard>
          <Route component={() => (
            <div>
              <Route path="/users" component={Authentication(UserContainer)} />
              <Route path="/other" component={Authentication(UserContainer)} />
            </div>
          )}
          />
        </Dashboard>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
