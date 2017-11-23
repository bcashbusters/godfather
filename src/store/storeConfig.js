import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import GameInfoData from '../mock/gameinfo';
import UsersInfo from "../mock/userinfo";

export default function configureStore() {
  const middlewares = [
    thunkMiddleware,
  ];
  const initialState = {
    gameInfo: GameInfoData.chris,
    userInfo: UsersInfo.john
  };
  return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
}
