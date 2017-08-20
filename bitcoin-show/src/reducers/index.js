import { combineReducers } from 'redux';
import questionReducer from './dataReducer';

const rootReducer = combineReducers({
  questionReducer,
});

export default rootReducer;
