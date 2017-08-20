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
};


export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA_QUESTION:
      return {
        ...state,
        data: [],
        isFetching: true,
      };
    case FETCHING_DATA_QUESTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case FETCHING_DATA_QUESTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
}
