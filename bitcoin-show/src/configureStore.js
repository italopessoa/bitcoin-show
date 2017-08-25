import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import app from './reducers';
import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  // const store = createStore(app, applyMiddleware(thunk));
  const store = createStore(app, composeEnhancers(
    applyMiddleware(thunk),
  ));
  return store;
}
