import {
  TOOLS_STOP,
} from '../actions/actionTypes';

const initialState = {
  stopProgress: false,
};

export default function toolsReducer(state = initialState, action) {
  switch (action.type) {
    case TOOLS_STOP:
      return {
        ...state,
        stopProgress: true,
      };
    default:
      return state;
  }
}
