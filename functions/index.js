'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const request = require('request-promise');
const gcs = require('@google-cloud/storage')();
admin.initializeApp(functions.config().firebase);

exports.get = functions.storage.object().onChange(event => {
  const object = event.data; // The Storage object.

  const fileBucket = object.bucket; // The Storage bucket that contains the file.
  const filePath = object.name; // File path in the bucket.
  const contentType = object.contentType; // File content type.
  const resourceState = object.resourceState; // The resourceState is 'exists' or 'not_exists' (for file/folder deletions).
  const metageneration = object.metageneration; // Number of times metadata has been generated. New objects have a value of 1.
  const imageURL = object.downloadURLs

  const file = gcs.bucket(object.bucket).file(object.name);


  console.log(imageURL);

  if (!contentType.startsWith('image/')) {
    console.log('This is not an image.');
    return;
  }
  var uriBase = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAKeWFptGfGF0QWHs1oasHrq5vRYog1LOc";

  return file.download().then(
    (fileData) => request({
    uri: uriBase,
    method: 'POST',
    json: {
      requests: [
        {
          "image": {
            "content": fileData
          },
          "features": [
            {
              "type": "TEXT_DETECTION"
            }
          ]
        }
      ]
    }
  }))
    .then((data) => {
      console.log(JSON.stringify(data));
      return admin.database().ref(`analysis/${filePath}`).set(data);
    });
});
