import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import app from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});

export default function configureStore() {
  const store = createStore(app, composeEnhancers(
    applyMiddleware(thunk, logger),
  ));
  return store;
}
