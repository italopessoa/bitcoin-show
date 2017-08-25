import {
  TOOLS_STOP,
  TOOLS_SKIP_QUESTION,
  TOOLS_SKIP_COMPLETED,
} from '../actions/actionTypes';

const initialState = {
  stopProgress: false,
  skipQuestion: false,
  questionWasSkipped: false,
};

export default function toolsReducer(state = initialState, action) {
  switch (action.type) {
    case TOOLS_STOP:
      return {
        ...state,
        stopProgress: true,
        skipQuestion: false,
      };
    case TOOLS_SKIP_QUESTION:
      return {
        ...state,
        skipQuestion: true,
        questionWasSkipped: false,
      };
    case TOOLS_SKIP_COMPLETED:
      return {
        ...state,
        skipQuestion: false,
        questionWasSkipped: true,
      };
    default:
      return state;
  }
}
