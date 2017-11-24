import React, { Component } from 'react';
import Camera from './Camera';
import axios from 'axios';
import firebase from 'firebase';

const style = {
  preview: {
    position: 'relative'
  },
  captureContainer: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
    bottom: 0,
    width: '100%'
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    height: 56,
    width: 56,
    color: '#000',
    margin: 20
  },
  captureImage: {
    width: '100%',
  },
  reverseCamera: {

  }
};


export default class GameCam extends Component {

  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  componentWillMount() {

    navigator.mediaDevices.enumerateDevices()
      .then(function (devices) {
        devices.forEach(function (device) {
          console.log(device.kind + ": " + device.label +
            " id = " + device.deviceId);
        });
      })
  }

  componentDidMount() {
  }

  takePicture() {




    this.camera.capture()
      .then(blob => {
        let reader = new window.FileReader();
        reader.readAsDataURL(blob);
        let baseData;
        let data1 = new FormData();

        reader.onloadend = function() {
          baseData = reader.result;
          console.dir(baseData);
          data1.append( "json", JSON.stringify({
            data: baseData
          }));
          axios.post("https://us-central1-god-father.cloudfunctions.net/api2/", { data : baseData.slice(23)} )
            .then(function (response) {
              let useful = response.data.responses[0];
              let searchedTexts = useful.textAnnotations;
              if(searchedTexts && Array.isArray(searchedTexts)) {
                searchedTexts.map(x => {
                  console.log(x.description);
                })
              }else{
                console.log("nothing found");
              }
            });
          let headers = {
            'app_id':'dffd21fa',
            'app_key':'c7f2926c313ccbfa644cbec56f9befe4'
          };

          axios.post("https://api.kairos.com/recognize", {
              image : baseData,
              gallery_name : "bcash"
            }, {
            headers: {
            'app_id':'dffd21fa',
            'app_key':'c7f2926c313ccbfa644cbec56f9befe4'
          }}).then(data =>
            {
            console.log("image recognition Results :- ");
            console.log(data);
            data.data.images.map(c => console.log(c.transaction.subject_id))
            }).catch(e => {console.log(e)});

        };
        this.setState({ uploading: true });
      })

  }

  render() {
    return (
      <div style={style.container}>
        <Camera
          style={style.preview}
          ref={(cam) => { this.camera = cam; }} id="myFirstCam">
          <div style={style.captureContainer} onClick={this.takePicture}>
            <div style={style.captureButton} />
          </div>
        </Camera>
      </div>
    );
  }
}