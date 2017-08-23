import { SELECT_OPTION } from '../actions/actionTypes';

const initialState = {
  selectedOptionNumber: undefined,
};

function optionReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_OPTION:
      console.log('option selected')
      return {
        ...state,
        selectedOptionNumber: action.data,
      };
    default:
      return state;
  }
}

export default optionReducer;
