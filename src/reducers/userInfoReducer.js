export const userInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return Object.assign({}, action.user);
    default:
      return state;
  }
};
