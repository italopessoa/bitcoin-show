import {
  FETCHING_DATA_QUESTION,
  FETCHING_DATA_QUESTION_SUCCESS,
  FETCHING_DATA_QUESTION_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
  question: undefined,
};


export default function questionReducer(state = initialState, action) {
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
    default:
      return state;
  }
}
