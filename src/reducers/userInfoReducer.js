export const userInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      console.log(action.user)
      return Object.assign({}, action.user);
    default:
      return state;
  }
};
