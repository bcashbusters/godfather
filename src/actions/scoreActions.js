const ADD_TO_SCORE = 'ADD_TO_SCORE';
const SCORE_CHANGED = 'SCORE_CHANGED';

export const addToScore = info => {
  return {
    type: ADD_TO_SCORE,
    info,
  };
};

export const scoreChanged = info => {
  return {
    type: SCORE_CHANGED,
    info,
  };
};