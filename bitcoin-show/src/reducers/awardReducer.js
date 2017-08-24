import {
  FETCHING_DATA_AWARDS,
  FETCHING_DATA_AWARDS_SUCCESS,
  FETCHING_DATA_AWARDS_ERROR,
} from '../actions/actionTypes';

const initialState = {
  awards: [],
};

export default function awardReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA_AWARDS:
      return state;
    case FETCHING_DATA_AWARDS_SUCCESS:
      console.log(action.data);
      return {
        ...state,
        awards: action.data,
      };
    case FETCHING_DATA_AWARDS_ERROR:
      return {
        ...state,
        awards: [],
      };
    default:
      return state;
  }
}
