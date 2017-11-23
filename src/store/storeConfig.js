import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import GameInfoData from '../mock/gameinfo';
import UsersInfo from "../mock/userinfo";

export default function configureStore() {
  const middlewares = [
    thunkMiddleware,
  ];
  const user = 'chris';
  const initialState = {
    gameInfo: GameInfoData[user],
    userInfo: UsersInfo[user]
  };
  return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
}
