import React from 'react';
import firebaseui from 'firebaseui';

import firebase from '../firebase';

import 'firebaseui/dist/firebaseui.css';

class LoginForm extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    var uiConfig = {
      signInSuccessUrl: '/asum',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
    };

    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  }

  render() {
    return (
      <div id="firebaseui-auth-container"></div>
    );
  }
}

export default LoginForm;