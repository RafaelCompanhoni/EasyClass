import { PROFESSOR_LIST_FETCHED } from '../actions/types';

const initialState = {
  professores: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROFESSOR_LIST_FETCHED: {
      return {
        ...state,
        professores: action.professores,
      };
    }

    default:
      return state;
  }
};
