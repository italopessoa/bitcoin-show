import { combineReducers } from 'redux';
import questionData from './questionReducer';
import optionData from './optionReducer';

const rootReducer = combineReducers({
  questionData,
  optionData,
});

export default rootReducer;
