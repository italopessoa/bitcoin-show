import {
  FETCHING_DATA_QUESTION,
  FETCHING_DATA_QUESTION_SUCCESS,
  FETCHING_DATA_QUESTION_FAILURE,
  CHECKING_ANSWER,
  CHECKING_ANSWER_SUCCESS,
  CHECKING_ANSWER_FAILURE,
} from './actionTypes';

function getQuestion() {
  return {
    type: FETCHING_DATA_QUESTION,
  };
}

function getQuestionSuccess(data) {
  return {
    type: FETCHING_DATA_QUESTION_SUCCESS,
    data,
  };
}

function getQuestionFailure(err) {
  return {
    type: FETCHING_DATA_QUESTION_FAILURE,
    error: err,
  };
}

export function fetchQuestion() {
  return (dispatch) => {
    dispatch(getQuestion());
    fetch('http://localhost:51203/api/questions')
      .then(response => response.json())
      .then(result => dispatch(getQuestionSuccess(result)))
      .catch(err => dispatch(getQuestionFailure(err)));
  };
}

function checkAnswerSuccess() {
  return {
    type: CHECKING_ANSWER_SUCCESS,
  };
}

function checkAnswerFailure() {
  return {
    type: CHECKING_ANSWER_FAILURE,
  };
}

function checkingAnswer() {
  return {
    type: CHECKING_ANSWER,
  };
}

export default function checkAnswer(question, selectedOption) {
  return (dispatch) => {
    dispatch(checkingAnswer());
    if (question.answer.number === selectedOption) {
      dispatch(checkAnswerSuccess());
    } else {
      dispatch(checkAnswerFailure());
    }
  };
}
