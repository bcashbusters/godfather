import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import GameInfoData from '../components/customer/gameInfo/gameInfo_data';

export default function configureStore() {
  const middlewares = [
    thunkMiddleware,
  ];
  const initialState = {
    gameInfo: GameInfoData
  };
  return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
}
