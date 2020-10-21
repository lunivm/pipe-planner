import { combineReducers } from 'redux';
import buckets from './buckets';
import dashboard from './dashboard';

export default combineReducers({
  dashboard,
  buckets
});
