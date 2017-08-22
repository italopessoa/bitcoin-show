import {
  FETCHING_DATA_QUESTION,
  FETCHING_DATA_QUESTION_SUCCESS,
  FETCHING_DATA_QUESTION_FAILURE,
  CHECKING_ANSWER,
  CHECKING_ANSWER_SUCCESS,
  CHECKING_ANSWER_FAIL,
  CHECKING_ANSWER_ERROR,
} from './actionTypes';

import { checkAnswerService } from '../services/QuestionServices';
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

function checkAnswerFail() {
  return {
    type: CHECKING_ANSWER_FAIL,
  };
}

function checkAnswerError(error) {
  return {
    type: CHECKING_ANSWER_ERROR,
    data: error,
  };
}

function checkingAnswer() {
  return {
    type: CHECKING_ANSWER,
  };
}

const checkAnsertService = function(correctOption, selectedOption) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if(selectedOption === undefined || selectedOption < 1) {
        reject('Select an option!');
      }
      let isAnswerCorrect = (selectedOption === correctOption)
      resolve(isAnswerCorrect);
    }, 400);
  });
}

export default function checkAnswer(question, selectedOption) {
  console.log(selectedOption)
  return (dispatch) => {
    dispatch(checkingAnswer());
    checkAnswerService(question.answer.number, selectedOption)
    .then(isAnswerCorrect => {
      if(isAnswerCorrect) {
        dispatch(checkAnswerSuccess())
      } else {
        dispatch(checkAnswerFail())
      }
    })
    .catch(error => dispatch(checkAnswerError(error)));
  };
}
