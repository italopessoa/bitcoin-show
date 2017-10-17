import { combineReducers } from 'redux'
import questionData from './questionReducer'

const rootReducer = combineReducers({
  questionData,
})

export default rootReducer
