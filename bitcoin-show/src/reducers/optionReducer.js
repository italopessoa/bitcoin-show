import {
  SELECT_OPTION,
  FETCHING_DATA_QUESTION,
  CHECKING_ANSWER_SUCCESS,
  CHECKING_ANSWER_FAIL,
} from '../actions/actionTypes'

const initialState = {
  selectedOptionNumber: 0,
  hasASelectedOption: false,
}

function optionReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_OPTION:
      return {
        ...state,
        selectedOptionNumber: action.data,
        hasASelectedOption: true,
      }
    case FETCHING_DATA_QUESTION:
    case CHECKING_ANSWER_SUCCESS:
    case CHECKING_ANSWER_FAIL:
      return {
        ...state,
        hasASelectedOption: false,
        selectedOptionNumber: 0,
      }
    default:
      return state
  }
}

export default optionReducer
