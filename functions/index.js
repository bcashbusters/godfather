const functions = require("firebase-functions");
const cors = require("cors")({origin:true});
const request = require("request-promise");
const express = require("express");
const uriBase = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAKeWFptGfGF0QWHs1oasHrq5vRYog1LOc";
/* Express with CORS */
const app2 = express();
app2.use(cors({ origin: true }));
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
    return admin.database().ref(`analysis/${filePath}`).set(data);
  });


});

const api2 = functions.https.onRequest(app2)


module.exports = {
  api2
};



