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
  TOOLS_SKIP_QUESTION_SUCCESS,
  TOOLS_DISPLAY_CARDS,
  TOOLS_CARD_SELECTED,
  TOOLS_STOP_PLAYING,
} from './actionTypes';
import { checkAnswerService, removeWrongOptionsService } from '../services/QuestionServices';

function getQuestion() {
  return {
    type: FETCHING_DATA_QUESTION,
  };
}

function getQuestionSuccess(question) {
  return {
    type: FETCHING_DATA_QUESTION_SUCCESS,
    data: question,
  };
}

function getQuestionFailure(err) {
  return {
    type: FETCHING_DATA_QUESTION_FAILURE,
    error: err,
  };
}

export function fetchQuestion(level = 0) {
  const url = 'http://localhost:51203/api/questions/RandomQuestionByLevel/';
  return (dispatch) => {
    dispatch(getQuestion());
    fetch(url.concat(level))
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

export default function checkAnswer(question, selectedOptionNumber) {
  return (dispatch) => {
    dispatch(checkingAnswer());
    checkAnswerService(question.answer.number, selectedOptionNumber)
      .then((isAnswerCorrect) => {
        if (isAnswerCorrect) {
          dispatch(checkAnswerSuccess());
        } else {
          dispatch(checkAnswerFail());
        }
      })
      .catch(error => dispatch(checkAnswerError(error)));
  };
}

function skipingQuestion() {
  return { type: TOOLS_SKIP_QUESTION };
}
function skipQuestionSuccess(data) {
  return { type: TOOLS_SKIP_QUESTION_SUCCESS, data };
}

export function skipQuestion(level = 0) {
  const url = 'http://localhost:51203/api/questions/RandomQuestionByLevel/';
  return (dispatch) => {
    dispatch(skipingQuestion());
    fetch(url.concat(level))
      .then(response => response.json())
      .then(result => dispatch(skipQuestionSuccess(result)));
  };
}

export function stopPlaying() {
  return { type: TOOLS_STOP_PLAYING };
}

function getAwardsSuccess(awards) {
  return {
    type: FETCHING_DATA_AWARDS_SUCCESS,
    data: awards,
  };
}

function getAwardsError(err) {
  return {
    type: FETCHING_DATA_AWARDS_ERROR,
    error: err,
  };
}

function getAwards() {
  return {
    type: FETCHING_DATA_AWARDS,
  };
}

export function fetchAwards() {
  return (dispatch) => {
    dispatch(getAwards());
    fetch('http://localhost:51203/api/questions/awards')
      .then(response => response.json())
      .then(result => dispatch(getAwardsSuccess(result)))
      .catch(err => dispatch(getAwardsError(err)));
  };
}

export function displayCards() {
  return { type: TOOLS_DISPLAY_CARDS };
}

export function cardSelectedSuccess(question) {
  return { type: TOOLS_CARD_SELECTED, data: question };
}

export function cardSelected(cardNumber, currentQuestion) {
  return (dispatch) => {
    dispatch({ type: 'REMOVENDO_OPCOES' });
    removeWrongOptionsService(currentQuestion, cardNumber)
      .then(result => dispatch(cardSelectedSuccess(result.question)));
  };
}
