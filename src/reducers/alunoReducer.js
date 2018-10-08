import { ALUNO_LIST_FETCHED } from '../actions/types';

const initialState = {
  alunos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALUNO_LIST_FETCHED: {
      return {
        ...state,
        alunos: action.alunos,
      };
    }

    default:
      return state;
  }
};
