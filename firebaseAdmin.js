

var admin = require("firebase-admin");

var serviceAccount = require("./god-father-firebase-adminsdk-hi0zq-6e0edfcf3f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://god-father.firebaseio.com"
});
const Avatars = {
  'geeky' : {
    name: 'Geek',
    src: "images/avatars/geeky.gif",
    alt: "geeky"
  },
  'natureLover': {
    name: 'Nature Lover',
    src: "images/avatars/nature-lover.jpg",
    alt: "Nature lover"
  },
  'robber': {
    name: 'Robber',
    src: "images/avatars/robber.png",
    alt: "Robber"
  },
  'saver': {
    name: 'Saver',
    src: "images/avatars/saver.png",
    alt: "Saver"
  }
}


/*offerData.map(offer =>
  ref.push(offer));*/

admin.database().ref("avatars").set(Avatars)