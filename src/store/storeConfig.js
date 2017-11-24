import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import GameInfoData from '../mock/gameinfo';
import UsersInfo from "../mock/userinfo";

export function configureStore() {
  const middlewares = [
    thunkMiddleware,
  ];
  const user = 'yogesh';
  const initialState = {
    gameInfo: GameInfoData[user],
    userInfo: UsersInfo[user]
  };
  return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
}

export default configureStore();
