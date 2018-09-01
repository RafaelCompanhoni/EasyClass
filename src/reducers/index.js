import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  authData: authReducer,
  usersData: userReducer,
});

export default rootReducer;
