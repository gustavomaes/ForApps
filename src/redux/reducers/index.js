import { combineReducers } from 'redux';
import toast from './toast';
import login from './login';
import users from './users';

const rootReducer = combineReducers({
  toast,
  login,
  users,
});

export default rootReducer;
