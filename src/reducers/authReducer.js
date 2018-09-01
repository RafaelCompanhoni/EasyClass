import { SIGNED_IN } from '../actions/types';

const initialState = {
  auth: {},
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

    default:
      return state;
  }
};
