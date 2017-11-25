import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './routes/Home';
import LeaderBoard from './routes/Leaderboard';
import AccountSummary from './routes/AccountSummary';
import MerchantOffers from './components/customer/merchantOffers';
import AvailOffer from './components/customer/availOffer';
import GameHome from './routes/GameHome';
import Tasks from './components/customer/tasks';
import TaskList from './components/customer/taskList';
import GameCam from './components/GameCam';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPalette from 'material-ui/styles/createPalette'
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import { blue, amber, red } from 'material-ui/colors';
import firebase from './firebase';

import { Provider, connect } from 'react-redux';
import store from './store/storeConfig';
import { loginUser, setUp } from './actions/index';
import { database } from 'firebase';

const muiTheme = createMuiTheme({
  palette: createPalette({
    primary: blue,
    accent: amber,
    error: red,
    type: 'light'
  })
});

const AunthenticatedRoutes = (props) =>
  <Switch>
    <Route path='/asum' exact component={AccountSummary} />
    <Route path='/offers' component={MerchantOffers} />
    <Route path='/gameHome' component={GameHome} />
    <Route path='/gameCam' component={GameCam} />
    <Route path='/tasks' component={Tasks} />
    <Route path='/leaderboard' component={LeaderBoard} />
    <Route path='/tasklist' component={TaskList} />
    <Route path='/availoffer' component={AvailOffer} />
    <Route path='*' component={AccountSummary} />
  </Switch>;

class App extends Component {
  componentDidMount() {
    setUp();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref("users").child(user.uid).once("value", (snap) => {
          const userInfo = snap.val();
          console.log(userInfo)
          firebase.database().ref("avatars").child(userInfo.avatarId).once("value", (snap) => {
            const avatar = snap.val();
            console.log(Object.assign({}, userInfo, { avatar }));
            this.props.dispatch(loginUser(Object.assign({}, userInfo, { avatar })))
          });
        })
      }
      else
        this.props.dispatch(loginUser({}))
    });
  }

  render() {
    const { userInfo } = this.props;

    return (
      <div className="App">
        <MuiThemeProvider theme={muiTheme}>
          <BrowserRouter>
            <div>
              <Header user={userInfo} />
              {userInfo.name ? (<AunthenticatedRoutes />) : <Route path='/' exact component={Home} />}
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

const ConnectedApp = connect(state => state)(App);

export default function Root() {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  )
}