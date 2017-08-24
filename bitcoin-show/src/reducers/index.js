import { combineReducers } from 'redux';
import questionData from './questionReducer';
import optionData from './optionReducer';
import awardData from './awardReducer';

const rootReducer = combineReducers({
  questionData,
  optionData,
  awardData,
});

export default rootReducer;
