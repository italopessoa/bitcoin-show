import {
  FETCHING_DATA_QUESTION,
  FETCHING_DATA_QUESTION_SUCCESS,
  FETCHING_DATA_QUESTION_FAILURE,
  SELECT_OPTION,
  CHECKING_ANSWER,
  CHECKING_ANSWER_SUCCESS,
  CHECKING_ANSWER_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
  question: undefined,
  selectedOption: undefined,
};

function questionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA_QUESTION:
      return {
        ...state,
        question: undefined,
        isFetching: true,
      };
    case FETCHING_DATA_QUESTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        question: action.data.question,
      };
    case FETCHING_DATA_QUESTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        question: undefined,
      };
    case SELECT_OPTION:
    case CHECKING_ANSWER:
      return {
        ...state,
      };
    case CHECKING_ANSWER_SUCCESS:
      console.log('certa resposta');
      return {
        ...state,
      };
    case CHECKING_ANSWER_FAILURE:
      console.log('resposta errada');
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default questionReducer;
