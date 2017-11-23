import { combineReducers } from 'redux';
import { gameInfoReducer } from './gameInfoReducer';


export default combineReducers({
  gameInfo: gameInfoReducer,
});
