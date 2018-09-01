import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  usersData: userReducer,
});

export default rootReducer;
