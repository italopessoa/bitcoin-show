import { SELECT_OPTION } from './actionTypes';

export function selectOption(optionNumber) {
  return {
    type: SELECT_OPTION,
    data: optionNumber,
  }
}