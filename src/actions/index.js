import axios from 'axios';
import history from '../history';
import * as actionTypes from './types';

const BASE_URL = `${SERVER_URL}/api`;

function mapErrorsFromResponse(errorResponse) {
  if (errorResponse && errorResponse.response && errorResponse.response.data && errorResponse.response.data.errors) {
    return Object.keys(errorResponse.response.data.errors).map(key => errorResponse.response.data.errors[key].msg);
  }

  return ['Ocorreu um erro'];
}

export function signIn(email, password) {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${BASE_URL}/signin`, { email, password });
      dispatch({ type: actionTypes.SIGNED_IN, auth: response.data });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('loggedInUser', JSON.stringify(response.data.user));

      history.push('/users');
    } catch (error) {
      dispatch({ type: actionTypes.SIGNED_IN_ERROR, authErrors: mapErrorsFromResponse(error) });
    }
  };
}

export function signOut() {
  return async (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');

    dispatch({ type: actionTypes.SIGNED_OUT });
  };
}

export function fetchUserList() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/user`);
      dispatch({ type: actionTypes.USER_LIST_FETCHED, users: response.data });
    } catch (error) {
      dispatch({ type: actionTypes.USER_LIST_FETCHED_ERROR, fetchedUserErrors: mapErrorsFromResponse(error) });
    }
  };
}
