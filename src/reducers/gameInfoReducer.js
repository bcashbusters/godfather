export const gameInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_SCORE':
      return { ...state, score: { current: state.score.current + parseInt(action.info) } };
    default:
      return state;
  }
};
