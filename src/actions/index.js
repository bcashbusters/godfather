import firebase from 'firebase';
import store from '../store/storeConfig';
import { setup } from './util';

const LOGIN_USER = 'LOGIN_USER';
const offersRef = firebase.database().ref("offers");


export const loginUser = (user) => ({ type: LOGIN_USER, user })

export const openOffers = () => {
  const addOrUpdate = (snap) => {
    store.dispatch({ type: 'ADD_OFFER', key: snap.key, offer: snap.val() })
  }
  setup(offersRef, {
    onChildAdded: addOrUpdate,
    onChildChanged: addOrUpdate
  });
}

export const imageProcessed = (offer) => {
  return {
    type: 'IMAGE_PROCESSED',
    key: 'currOffer',
    offer
  };
};

export const closeOffers = () => {
  offersRef.off();
}

export const setUp = () => {
  firebase.database().ref("levels").on("value", snap => {
    store.dispatch({ type: 'LEVELS_CHANGED', levels: snap.val() })
  });
  firebase.database().ref("merchants").on("value", snap => store.dispatch({ type: 'MERCHANTS_CHANGED', merchants: snap.val() }));

};

export const setUpGameData = (userInfo) => {
  firebase.database().ref("gameInfo").child(userInfo.uid).on('value', snap => {
    store.dispatch({ type: 'GAME_INFO_CHANGED', userInfo, gameInfo: snap.val() })
  })
}

export const acceptOffer = (uid, offerMerchant) => {

}

export const destroyGameData = (uid) => {
  firebase.database().ref("gameInfo").child(uid).off();
}