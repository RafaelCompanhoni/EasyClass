import { SECTION_SELECTED } from '../actions/types';

const initialState = {
  selectedSection: 'users',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SECTION_SELECTED: {
      return {
        ...state,
        selectedSection: action.selectedSection,
      };
    }

    default:
      return state;
  }
};
