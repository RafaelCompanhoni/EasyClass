import { SIGNED_IN } from '../actions/types';

const initialState = {
  auth: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNED_IN: {
      return { ...state, auth: action.auth };
    }

    default:
      return state;
  }
};
