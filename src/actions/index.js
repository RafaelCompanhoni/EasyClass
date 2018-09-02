import axios from 'axios';
import history from '../history';
import * as actionTypes from './types';

const BASE_URL = `${SERVER_URL}/api`;

export function signIn(email, password) {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${BASE_URL}/signin`, { email, password });
      dispatch({ type: actionTypes.SIGNED_IN, auth: response.data });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('loggedInUser', JSON.stringify(response.data.user));

      history.push('/users');
    } catch (error) {
      dispatch({ type: actionTypes.SIGNED_IN_ERROR, authError: error.response.data });
    }
  };
}

export function fetchUserList() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/user`);
      dispatch({ type: actionTypes.USER_LIST_FETCHED, users: response.data });
    } catch (error) {
      dispatch({ type: actionTypes.USER_LIST_FETCHED_ERROR, error });
    }
  };
}
