import axios from 'axios';
import history from '../history';
import * as actionTypes from './types';

const BASE_URL = `${SERVER_URL}/api`;

export function signIn(email, password) {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/signin`, { email, password })
      .then((response) => {
        dispatch({ type: actionTypes.SIGNED_IN, auth: response.data });

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('loggedInUser', response.data.user);

        history.push('/users');
      })
      .catch(() => {});
  };
}

export function fetchUserList() {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/user`)
      .then((response) => {
        dispatch({ type: actionTypes.USER_LIST_FETCHED, users: response.data });
      })
      .catch(() => {});
  };
}
