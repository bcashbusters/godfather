export const merchantsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'MERCHANTS_CHANGED':
      return Object.assign({}, action.levels);
    default:
      return state;
  }
};
