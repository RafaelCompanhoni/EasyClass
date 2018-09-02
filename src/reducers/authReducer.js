import {
  SIGNED_IN,
  SIGNED_IN_ERROR,
  SIGNED_OUT,
  CLEAR_AUTH_ERRORS,
} from '../actions/types';

const initialState = {
  auth: {},
  authErrors: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNED_IN: {
      return {
        ...state,
        token: action.auth.token,
        loggedInUser: action.auth.user,
        authErrors: null,
      };
    }

    case SIGNED_IN_ERROR: {
      return {
        ...state,
        authErrors: action.authErrors,
      };
    }

    case SIGNED_OUT: {
      return {
        ...state,
        token: null,
        loggedInUser: null,
      };
    }

    case CLEAR_AUTH_ERRORS: {
      return {
        ...state,
        authErrors: null,
      };
    }

    default:
      return state;
  }
};
