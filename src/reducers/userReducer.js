import { USER_LIST_FETCHED } from '../actions/types';

const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LIST_FETCHED: {
      return {
        ...state,
        users: action.users,
      };
    }

    default:
      return state;
  }
};
