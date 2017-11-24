var admin = require("firebase-admin");

var serviceAccount = require("./god-father-firebase-adminsdk-hi0zq-6e0edfcf3f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://god-father.firebaseio.com"
});

const leaderBoard=[
  {
    username:'Hemant',
    selfScore : 170,

    ranks : {
      friends : {text:"2nd",val:2},
      local : {text:"3rd",val:3},
      global: {text:"456th",val:465}
    },
    data : {
      friends: [
          {userName: 'Hemant', highScore: 170},
          {userName: 'Joe', highScore: 152},
          {userName: 'Jenny', highScore: 120},
          {userName: 'Anthony', highScore: 119},
          {userName: 'Gerrard', highScore: 109},
          {userName: 'Steve', highScore: 100},
          {userName: 'Serge', highScore: 95},

      ],
      local: [
          {userName: 'Subin', highScore: 190},
          {userName: 'James', highScore: 179},
          {userName: 'Hemant', highScore: 170},
          {userName: 'Bond', highScore: 89},
          {userName: 'Chang', highScore: 65},
          {userName: 'Alan', highScore: 40},
          {userName: 'Smith', highScore: 0},
          {userName: 'Anna', highScore: 0},
    ],
      global: [
          {userName: 'BTrux', highScore: 1750},
          {userName: 'Bane', highScore: 1600},
          {userName: 'Kennethan', highScore: 1400},
          {userName: 'Jimmy', highScore: 1300},
          {userName: 'Tom', highScore: 1200},
          {userName: 'Aops', highScore: 1100},
          {userName: 'Hemant', highScore: 170},
       ]
  }},
  {
    username:'Aniket',
    selfScore : 200,

    ranks : {
      friends : {text:"1st",val:1},
      local : {text:"1st",val:1},
      global: {text:"406th",val:406}
    },
    data : {
      friends: [
        {userName: 'Aniket', highScore: 200},
        {userName: 'Hemant', highScore: 170},
        {userName: 'Joe', highScore: 152},
        {userName: 'Jenny', highScore: 120},
        {userName: 'Anthony', highScore: 119},
        {userName: 'Gerrard', highScore: 109},
        {userName: 'Steve', highScore: 100},
        {userName: 'Serge', highScore: 95},

      ],
      local: [
        {userName: 'Aniket', highScore: 200},
        {userName: 'Subin', highScore: 190},
        {userName: 'James', highScore: 179},
        {userName: 'Bond', highScore: 89},
        {userName: 'Chang', highScore: 65},
        {userName: 'Alan', highScore: 40},
        {userName: 'Smith', highScore: 0},
        {userName: 'Anna', highScore: 0},
      ],
      global: [
        {userName: 'BTrux', highScore: 1750},
        {userName: 'Bane', highScore: 1600},
        {userName: 'Kennethan', highScore: 1400},
        {userName: 'Jimmy', highScore: 1300},
        {userName: 'Tom', highScore: 1200},
        {userName: 'Aops', highScore: 1100},
        {userName: 'Aniket', highScore: 200},
      ]
    },



  },
  {
    username:'Ankit',
    selfScore : 120,
    ranks : {
      friends : {text:"3rd",val:3},
      local : {text:"1st",val:1},
      global: {text:"556th",val:556}
    },
    data : {
      friends: [
        {userName: 'Joe', highScore: 152},
        {userName: 'Jughead', highScore: 130},
        {userName: 'Ankit', highScore: 120},
        {userName: 'Anthony', highScore: 119},
        {userName: 'Gerrard', highScore: 109},
        {userName: 'Steve', highScore: 100},
        {userName: 'Serge', highScore: 95},

      ],
      local: [
        {userName: 'Archie', highScore: 190},
        {userName: 'tintin', highScore: 179},
        {userName: 'Ankit', highScore: 120},
        {userName: 'jughead', highScore: 89},
        {userName: 'hallock', highScore: 65},
        {userName: 'Alan', highScore: 40},
        {userName: 'Smith', highScore: 0},
        {userName: 'Anna', highScore: 0},
      ],
      global: [
        {userName: 'BTrux', highScore: 1750},
        {userName: 'Bane', highScore: 1600},
        {userName: 'Kennethan', highScore: 1400},
        {userName: 'Jimmy', highScore: 1300},
        {userName: 'Tom', highScore: 1200},
        {userName: 'Aops', highScore: 1100},
        {userName: 'Ankit', highScore: 120},
      ]
    },



  }

]

const offerData = [
  {
    img: 'images/starbucks.jpg',
    title: '10% off',
    author: 'Starbucks',
    cols: 2
  },
  {
    img: 'images/iphonex.jpg',
    title: '10% off on iPhone X',
    author: 'Apple',
    cols: 1
  },
  {
    img: 'images/beats.png',
    title: '15% off',
    author: 'Beats',
  },
  {
    img: 'images/tesco.jpg',
    title: '12% off',
    author: 'Tesco',
  }, {
    img: 'images/amazon.ico',
    title: '12% off on Electronics',
    author: 'Amazon',
  },
  {
    img: 'images/starbucks.jpg',
    title: '10% off',
    author: 'Starbucks',
    cols: 2
  },
  {
    img: 'images/iphonex.jpg',
    title: '10% off on iPhone X',
    author: 'Apple',
    cols: 1
  },
  {
    img: 'images/beats.png',
    title: '15% off',
    author: 'Beats',
  },
  {
    img: 'images/tesco.jpg',
    title: '12% off',
    author: 'Tesco',
  },
];

const ref = admin.database().ref("offers")
const leaderboardRef = admin.database().ref("leaderboard")


leaderBoard.map(leader =>
  leaderboardRef.push(leader));


/*offerData.map(offer =>
  ref.push(offer));*/

