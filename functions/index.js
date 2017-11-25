const functions = require("firebase-functions");
const cors = require("cors");
const request = require("request-promise");
const express = require("express");
const uriBase = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAKeWFptGfGF0QWHs1oasHrq5vRYog1LOc";
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);


/* Express with CORS */
const app2 = express();


app2.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app2.post('/image',(req,response) => {
  console.log("retriving data");
  request({
    uri: "https://api.kairos.com/recognize",
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'app_id':'dffd21fa',
      'app_key':'c7f2926c313ccbfa644cbec56f9befe4'
    },
    body: {
      gallery_name : "bcash",
      image: req.body.data
    },
    json: true
  }).then((data) => {
    response.send(data);
  }).catch((err) => {
    response.send(err);
  });
});


//app2.use(cors({ origin: true }));
app2.get('/getOffers/:customerId', (req, res) => {
  const offerData = {
    'swapnilugare@gmail.com': {
      offers: [
        'Starbucks',
        'Amazon',
        'Beats',
      ]
    }
  };
  if (offerData[req.params.customerId] != undefined) {
    res.json(offerData[req.params.customerId].offers);
  } else {
    res.send('Please send a valid user');
  }
});
//app2.use(cors({ origin: true }));
app2.get('/merchants', (req, res) => {
  admin.database().ref('merchants').once('value', (snap) => {
    res.send(snap.val());
  });
});

app2.post("*", (req, response) => {

  request({
    uri: uriBase,
    method: 'POST',
    json: {
      requests: [
        {
          "image": {
            "content": req.body.data
          },
          "features": [
            {
              "type": "TEXT_DETECTION"
            }
          ]
        }
      ]
    }
  }).then((data) => {
    console.log(JSON.stringify(data));
    response.send(data);
  });


});

const api2 = functions.https.onRequest(app2)

const onUserAdded = functions.auth.user().onCreate(event => {
  const user = event.data;
  const p1 = admin.database().ref("users").child(user.uid).set({
    name: user.displayName,
    avatarId: 'geeky',
    cardBalance: 0,
    earnedRewardsPoints: 0,
    level: {
      id: 1,
      task1: 'true',
      task2: 'true',
      task3: 'true',
      task4: 'true',
      task4: 'true',
      task5: 'unassigned',
      task6: 'unassigned',
  }
  });

  const p2 = admin.database().ref("gameInfo").child(user.uid).set({
    score: {
      current: 600,
      total: 1000
    },
    rank: {
      current: 45,
      participants: 880
    }
  });

  return Promise.all(p1, p2);
});

module.exports = {
  api2,
  onUserAdded
};
