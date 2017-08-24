import {
  FETCHING_DATA_AWARDS,
  FETCHING_DATA_AWARDS_SUCCESS,
  FETCHING_DATA_AWARDS_ERROR,
  CHECKING_ANSWER_SUCCESS,
  CHECKING_ANSWER_FAIL,
} from '../actions/actionTypes';

const initialState = {
  awards: [],
  current: 0,
  value: { right: 0, stop: 0, wrong: 0, level: 0 },
};

export default function awardReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA_AWARDS:
      return state;
    case FETCHING_DATA_AWARDS_SUCCESS:
      console.log(action.data[0]);
      return {
        ...state,
        awards: action.data,
        current: 0,
        value: action.data[0],
      };
    case FETCHING_DATA_AWARDS_ERROR:
      return {
        ...state,
        awards: [],
        value: { right: 0, stop: 0, wrong: 0, level: 0 },
      };
    case CHECKING_ANSWER_SUCCESS:
      return {
        ...state,
        current: state.current + 1,
        value: state.awards[state.current + 1],
      };
    default:
      return state;
  }
}
