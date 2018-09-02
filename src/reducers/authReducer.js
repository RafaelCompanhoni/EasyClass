import {
  SIGNED_IN,
  SIGNED_IN_ERROR,
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
      };
    }

    case SIGNED_IN_ERROR: {
      return {
        ...state,
        authErrors: action.authErrors,
      };
    }

    default:
      return state;
  }
};
