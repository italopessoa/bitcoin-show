import {
  FETCHING_DATA_QUESTION,
  FETCHING_DATA_QUESTION_SUCCESS,
  FETCHING_DATA_QUESTION_FAILURE,
  SELECT_OPTION,
  CHECKING_ANSWER,
  CHECKING_ANSWER_SUCCESS,
  CHECKING_ANSWER_FAIL,
  CHECKING_ANSWER_ERROR,
} from '../actions/actionTypes';

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
  question: undefined,
  selectedOption: undefined,
};

const setSelectedOption = (question, selectedOption) => {
  const questionModified = question;
  questionModified.options = question.options.map((option) => {
    if (option.number === selectedOption) {
      return Object.assign({}, option, {
        selected: true,
      });
    }
    const { selected: omit, ...res } = option;
    return res;
  });

  return questionModified;
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
      console.log(state.question);
      return {
        ...state,
        question: setSelectedOption(state.question, action.data),
        selectedOption: action.data,
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
