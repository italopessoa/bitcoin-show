import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import app from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  // const store = createStore(app, applyMiddleware(thunk));
  const store = createStore(app, composeEnhancers(
    applyMiddleware(thunk, logger),
  ));
  return store;
}
