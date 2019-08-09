
import { combineReducers } from 'redux';
import user from './user';
import items from './items';
import admin from './admin';
export default combineReducers({
  user,
  items,
  admin
});
