import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import dashboard from './dashboard';

const createRootReducer = history => combineReducers({
  dashboard,
  router: connectRouter(history)
});

export default createRootReducer;
