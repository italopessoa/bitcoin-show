import {
  TOOLS_STOP,
  TOOLS_SKIP_QUESTION,
  TOOLS_SKIP_COMPLETED,
  TOOLS_DISPLAY_CARDS,
  TOOLS_HIDE_CARDS,
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

export function displayCards() {
  return { type: TOOLS_DISPLAY_CARDS };
}

export function hideCards() {
  return { type: TOOLS_HIDE_CARDS };
}
