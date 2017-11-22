import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBD45xVEZYy75s__z8tdWjLHPwcuLfTxjU",
  authDomain: "god-father.firebaseapp.com",
  databaseURL: "https://god-father.firebaseio.com",
  projectId: "god-father",
  storageBucket: "god-father.appspot.com",
  messagingSenderId: "1024039621938"
};

firebase.initializeApp(config);

export default firebase;