import createRootReducer from './reducers';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

export const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
