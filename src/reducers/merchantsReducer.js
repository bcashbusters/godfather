export const merchantsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'MERCHANTS_CHANGED':
      return Object.assign({}, action.merchants);
    default:
      return state;
  }
};
