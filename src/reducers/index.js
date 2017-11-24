import { combineReducers } from 'redux';
import { gameInfoReducer } from './gameInfoReducer';
import { offersReducer } from './offersReducer';
import { userInfoReducer  } from './userInfoReducer';
import { levelsReducer } from './levelsReducer';
import { merchantsReducer} from './merchantsReducer';

export default combineReducers({
  gameInfo: gameInfoReducer,
  offers: offersReducer,
  userInfo: userInfoReducer,
  levels: levelsReducer,
  merchants: merchantsReducer

});
