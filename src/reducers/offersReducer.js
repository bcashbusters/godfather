export const offersReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_OFFER':
      return { ...state, [action.key]: action.offer };
    default:
      return state;
  }
};
