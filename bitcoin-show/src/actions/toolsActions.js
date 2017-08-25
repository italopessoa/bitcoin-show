import {
  TOOLS_STOP,
  TOOLS_SKIP_QUESTION,
  TOOLS_SKIP_COMPLETED,
} from './actionTypes';

export function stopProgress() {
  return { type: TOOLS_STOP };
}

export function skipQuestion() {
  return { type: TOOLS_SKIP_QUESTION };
}

export function skipCompleted() {
  return { type: TOOLS_SKIP_COMPLETED };
}
