import { SELECT_OPTION } from './actionTypes';

export default function selectOption(optionNumber) {
  return {
    type: SELECT_OPTION,
    data: optionNumber,
  };
}
