import {
  FETCHING_DATA_AWARDS,
  FETCHING_DATA_AWARDS_SUCCESS,
  FETCHING_DATA_AWARDS_ERROR,
  UPDATE_AWARD,
} from './actionTypes';

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

export function updateAward() {
  return {
    type: UPDATE_AWARD,
  };
}

export default function fetchAwards() {
  return (dispatch) => {
    dispatch(getAwards());
    fetch('http://localhost:51203/api/questions/awards')
      .then(response => response.json())
      .then(result => dispatch(getAwardsSuccess(result.awards)))
      .catch(err => dispatch(getAwardsError(err)));
  };
}
