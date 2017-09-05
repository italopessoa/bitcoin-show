import {
  FETCHING_DATA_QUESTION,
  FETCHING_DATA_QUESTION_SUCCESS,
  FETCHING_DATA_QUESTION_FAILURE,
  CHECKING_ANSWER,
  CHECKING_ANSWER_SUCCESS,
  CHECKING_ANSWER_FAIL,
  CHECKING_ANSWER_ERROR,
  TOOLS_SKIP_QUESTION,
  TOOLS_SKIP_QUESTION_SUCCESS,
  FETCHING_DATA_AWARDS,
  FETCHING_DATA_AWARDS_SUCCESS,
  FETCHING_DATA_AWARDS_ERROR,
  TOOLS_DISPLAY_CARDS,
  TOOLS_CARD_SELECTED,
  TOOLS_CARD_FILTERING,
  TOOLS_STOP_PLAYING,
} from '../actions/actionTypes'

const initialState = {
  question: { id: 0, text: '', options: [] },
  isFetching: false,
  errorMessage: '',
  mustUpdateQuestion: false,

  awards: [],
  currentAwardIndex: 0,
  currentAwardValue: { number: 0, right: 0, stop: 0, wrong: 0, level: 0 },

  skipAttemptsLeft: 3,
  gameOver: false,

  cardsWereUsed: false,
  mustDisplayCards: false,
}


export function questionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA_QUESTION:
      return {
        ...state,
        question: { id: 0, text: '', options: [] },
        isFetching: true,
        mustUpdateQuestion: false,
      }
    case FETCHING_DATA_QUESTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        question: action.data,
      }
    case FETCHING_DATA_QUESTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.error,
        question: { id: 0, text: '', options: [] },
      }
    case CHECKING_ANSWER:
      return {
        ...state,
        isFetching: true,
      }
    case CHECKING_ANSWER_SUCCESS:
      return {
        ...state,
        mustUpdateQuestion: true,
        currentAwardIndex: state.currentAwardIndex + 1,
        currentAwardValue: state.awards[state.currentAwardIndex + 1],
        isFetching: false,
      }
    case CHECKING_ANSWER_FAIL:
      return {
        ...state,
        isFetching: false,
      }
    case CHECKING_ANSWER_ERROR:
      return {
        ...state,
        isFetching: false,
      }
    case TOOLS_SKIP_QUESTION:
      return {
        ...state,
        isFetching: true,
      }
    case TOOLS_SKIP_QUESTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        skipAttemptsLeft: state.skipAttemptsLeft - 1,
        question: action.data,
      }
    case FETCHING_DATA_AWARDS:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_DATA_AWARDS_SUCCESS:
      return {
        ...state,
        awards: action.data,
        currentAwardIndex: 0,
        currentAwardValue: action.data[0],
        isFetching: false,
      }
    case FETCHING_DATA_AWARDS_ERROR:
      return {
        ...state,
        awards: [],
        currentAwardValue: { number: 0, right: 0, stop: 0, wrong: 0, level: 0 },
        isFetching: false,
      }
    case TOOLS_DISPLAY_CARDS:
      return {
        ...state,
        mustDisplayCards: !state.cardsWereUsed,
        cardsWereUsed: true,
      }
    case TOOLS_CARD_SELECTED:
      return {
        ...state,
        question: action.data,
        mustDisplayCards: !state.cardsWereUsed,
        isFetching: false,
      }
    case TOOLS_CARD_FILTERING:
      return {
        ...state,
        isFetching: true,
      }
    case TOOLS_STOP_PLAYING:
      return {
        ...state,
        gameOver: true,
      }
    default:
      return state
  }
}

export default questionReducer
