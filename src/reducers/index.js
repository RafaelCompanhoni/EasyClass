import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import uiReducer from './uiReducer';
import professorReducer from './professorReducer';

const rootReducer = combineReducers({
  authData: authReducer,
  usersData: userReducer,
  professoresData: professorReducer,
  uiData: uiReducer,
});

export default rootReducer;
