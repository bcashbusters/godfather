import firebase from 'firebase';

const ADD_TO_SCORE = 'ADD_TO_SCORE';
const SCORE_CHANGED = 'SCORE_CHANGED';

export const addToScore = (uid, info) => {
  console.log("adding score" + info)
  firebase.database().ref("gameInfo").child(uid).child("score/current").transaction(score => score + info);
};

export const scoreChanged = info => {
  return {
    type: SCORE_CHANGED,
    info,
  };
};