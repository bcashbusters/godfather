export const gameInfoReducer = (state = [], action) => {
  switch (action.type) {

    case 'ADD_TO_SCORE': {
      const newState = JSON.parse(JSON.stringify(state));
      newState.score.current += parseInt(action.info);
      return newState;
    };
    default:
      return state;
  }
};
