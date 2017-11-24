const functions = require("firebase-functions");
const cors = require("cors");
const request = require("request-promise");
const express = require("express");
const uriBase = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAKeWFptGfGF0QWHs1oasHrq5vRYog1LOc";
/* Express with CORS */
const app2 = express();
app2.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//app2.use(cors({ origin: true }));
app2.get('/getOffers/:customerId', (req, res)=>{
  const offerData = {
    'swapnilugare@gmail.com': {
      offers: [
        'Starbucks',
        'Amazon',
        'Beats',
      ]
    }
  };
  if(offerData[req.params.customerId] != undefined){
    res.json(offerData[req.params.customerId].offers);
  }else {
    res.send('Please send a valid user');
  }
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


module.exports = {
  api2
};
