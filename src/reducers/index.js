import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  authData: authReducer,
  usersData: userReducer,
  uiData: uiReducer,
});

export default rootReducer;
