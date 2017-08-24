import {
  FETCHING_DATA_QUESTION,
  FETCHING_DATA_QUESTION_SUCCESS,
  FETCHING_DATA_QUESTION_FAILURE,
  CHECKING_ANSWER,
  CHECKING_ANSWER_SUCCESS,
  CHECKING_ANSWER_FAIL,
  CHECKING_ANSWER_ERROR,
} from '../actions/actionTypes';

const initialState = {
  question: { text: '', options: [] },
  questionLoadCompleted: false,
  isFetching: false,
  errorMessage: '',
  shouldUpdateQuestion: false,
};

function questionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA_QUESTION:
      return {
        ...state,
        question: { text: '', options: [] },
        isFetching: true,
        questionLoadCompleted: false,
        shouldUpdateQuestion: false,
      };
    case FETCHING_DATA_QUESTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        question: action.data.question,
        questionLoadCompleted: true,
      };
    case FETCHING_DATA_QUESTION_FAILURE:
      console.log(action.error);
      return {
        ...state,
        isFetching: false,
        errorMessage: action.error,
        question: undefined,
        questionLoadCompleted: false,
      };
    case CHECKING_ANSWER:
      console.log('verificando a reposta');
      return {
        ...state,
      };
    case CHECKING_ANSWER_SUCCESS:
      console.log('certa resposta');
      return {
        ...state,
        shouldUpdateQuestion: true,
      };
    case CHECKING_ANSWER_FAIL:
      console.log('resposta errada');
      return {
        ...state,
      };
    case CHECKING_ANSWER_ERROR:
      console.log(action.data);
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default questionReducer;
