export const userInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      console.log("Login action" + action.user)
      return Object.assign({}, action.user);
    default:
      return state;
  }
};
