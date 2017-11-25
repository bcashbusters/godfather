export const gameInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_SCORE':
      return { ...state, score: { current: state.score.current + parseInt(action.info) } };
    case 'GAME_INFO_CHANGED':
      return {
        ...state,
        user: action.userInfo,
        ...{ ...action.gameInfo, level: action.userInfo.level.id }
      };
    case 'IMAGE_PROCESSED':
      return { ...state, [action.key]: action.offer };
    default:
      return state;
  }
};
