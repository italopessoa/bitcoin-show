import { combineReducers } from 'redux';
import questionData from './questionReducer';
import optionData from './optionReducer';
import awardData from './awardReducer';
import tools from './toolsReducer';

const rootReducer = combineReducers({
  questionData,
  optionData,
  awardData,
  tools,
});

export default rootReducer;
