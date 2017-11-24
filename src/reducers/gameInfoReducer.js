export const gameInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, user: { current: state.score.current + parseInt(action.info) } };
    case 'ADD_TO_SCORE':
      return { ...state, score: { current: state.score.current + parseInt(action.info) } };
    default:
      return state;
  }
};
