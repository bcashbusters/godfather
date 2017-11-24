// Imports the Google Cloud client libraries
const request = require('request-promise');

var uriBase = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAKeWFptGfGF0QWHs1oasHrq5vRYog1LOc";
request({
  url: uriBase,
  method: 'POST',
  json: {
    requests: [
      {
        image: {
          source: {
            imageUri: "https://firebasestorage.googleapis.com/v0/b/god-father.appspot.com/o/qwer.png?alt=media&token=b0c39380-ab88-4a66-a8d6-d27ce5e16b86"
          }
        },
        "features": [
          {
            "type": "TEXT_DETECTION"
          }
        ]
      }
    ]
  }
})
  .then((data) => {
    console.log(data);
  });
