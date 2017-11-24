export const levelsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LEVELS_CHANGED':
      return Object.assign({}, action.levels);
    default:
      return state;
  }
};
