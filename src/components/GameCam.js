import React, { Component } from 'react';
import Camera from './Camera';
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
        console.log("Blob:");
        let reader = new window.FileReader();
        reader.readAsDataURL(blob);
        let baseData;
        reader.onloadend = function() {
          baseData = reader.result;
          console.log(baseData.slice(23));
          fetch("https://us-central1-god-father.cloudfunctions.net/api2/", {
            method: 'POST',
            body: {
              data: baseData.slice(23)
            }
          }).then((data) => console.log(data));
        };
        this.setState({ uploading: true });

        this.img.src = URL.createObjectURL(blob);
        console.log(URL.createObjectURL(blob));
        this.img.onload = () => { URL.revokeObjectURL(this.src); }

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
        <img
          style={style.captureImage}
          ref={(img) => {
            this.img = img;
          }}
          alt="Camera"
        />
      </div>
    );
  }
}