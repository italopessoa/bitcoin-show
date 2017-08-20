import {
  FETCHING_DATA_QUESTION,
  FETCHING_DATA_QUESTION_SUCCESS,
  FETCHING_DATA_QUESTION_FAILURE,
} from './actionTypes';

export function getQuestion() {
  return {
    type: FETCHING_DATA_QUESTION,
  };
}

export function getQuestionSuccess(data) {
  return {
    type: FETCHING_DATA_QUESTION_SUCCESS,
    data,
  };
}

export function getQuestionFailure(err) {
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
