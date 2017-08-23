import { combineReducers } from 'redux';
import questionData from './dataReducer';
import optionData from './optionReducer';

const rootReducer = combineReducers({
  questionData,
  optionData,
});

export default rootReducer;
