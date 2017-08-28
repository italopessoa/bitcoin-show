import {
  FETCHING_DATA_QUESTION,
  FETCHING_DATA_QUESTION_SUCCESS,
  FETCHING_DATA_QUESTION_FAILURE,
  CHECKING_ANSWER,
  CHECKING_ANSWER_SUCCESS,
  CHECKING_ANSWER_FAIL,
  CHECKING_ANSWER_ERROR,
  TOOLS_SKIP_QUESTION,
  FETCHING_DATA_AWARDS,
  FETCHING_DATA_AWARDS_SUCCESS,
  FETCHING_DATA_AWARDS_ERROR,
} from '../actions/actionTypes';

const initialState = {
  question: { id: 0, text: '', options: [] },
  isFetching: false,
  errorMessage: '',
  mustUpdateQuestion: false,

  awards: [],
  currentAwardIndex: 0,
  currentAwardValue: { number: 0, right: 0, stop: 0, wrong: 0, level: 0 },
};


export function questionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA_QUESTION:
      return {
        ...state,
        question: { id: 0, text: '', options: [] },
        isFetching: true,
        mustUpdateQuestion: false,
      };
    case FETCHING_DATA_QUESTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        question: action.data.question,
      };
    case FETCHING_DATA_QUESTION_FAILURE:
      console.log(action.error);
      return {
        ...state,
        isFetching: false,
        errorMessage: action.error,
        question: { id: 0, text: '', options: [] },
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
        mustUpdateQuestion: true,
        curentAwardIndex: state.curentAwardIndex + 1,
        currentAwardValue: state.awards[state.currentAwardIndex + 1],
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
    case TOOLS_SKIP_QUESTION:
      return {
        ...state,
        skipQuestion: true,
      };
    case FETCHING_DATA_AWARDS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_DATA_AWARDS_SUCCESS:
      return {
        ...state,
        awards: action.data,
        currentAwardIndex: 0,
        currentAwardValue: action.data[0],
        isFetching: false,
      };
    case FETCHING_DATA_AWARDS_ERROR:
      return {
        ...state,
        awards: [],
        currentAwardValue: { number: 0, right: 0, stop: 0, wrong: 0, level: 0 },
        isFetching: false,
      };
    default:
      return state;
  }
}

export default questionReducer;
