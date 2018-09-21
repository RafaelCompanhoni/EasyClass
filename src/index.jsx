import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import logger from 'redux-logger';
import 'babel-polyfill';
import reducers from './reducers';
import history from './history';
import { SIGNED_IN } from './actions/types';

import LoginContainer from './components/Login/LoginContainer';
import Dashboard from './components/Dashboard/DashboardContainer';
import UserContainer from './components/User/UserContainer';
import AprovacaoProfessorContainer from './components/AprovacaoProfessor/AprovacaoProfessorContainer';
import ProfessorContainer from './components/Professor/ProfessorContainer';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers);

// recovers auth data from local storage if page is reloaded
const token = localStorage.getItem('token');
const user = JSON.parse(localStorage.getItem('loggedInUser'));
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
            <Fragment>
              <Route path="/users" component={UserContainer} />
              <Route path="/aprovacao-professor" component={AprovacaoProfessorContainer} />
              <Route path="/professor" component={ProfessorContainer} />
            </Fragment>
          )}
          />
        </Dashboard>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
