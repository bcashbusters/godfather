import { combineReducers } from 'redux';
import { gameInfoReducer } from './gameInfoReducer';
import { offersReducer } from './offersReducer';
import { userInfoReducer } from './userInfoReducer';

export default combineReducers({
  gameInfo: gameInfoReducer,
  offers: offersReducer,
  userInfo: userInfoReducer
});
