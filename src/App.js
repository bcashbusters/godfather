import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './routes/Home';
import LeaderBoard from './routes/Leaderboard';
import AccountSummary from './routes/AccountSummary';
import MerchantOffers from './components/customer/merchantOffers';
import GameHome from './routes/GameHome';
import Tasks from './components/customer/tasks';
import GameCam from './components/GameCam';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPalette from 'material-ui/styles/createPalette'
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import { blue, amber, red } from 'material-ui/colors';
import firebase from './firebase';

import { Provider, connect } from 'react-redux';
import store from './store/storeConfig';
import { loginUser } from './actions/index';

const muiTheme = createMuiTheme({
  palette: createPalette({
    primary: blue,
    accent: amber,
    error: red,
    type: 'light'
  })
});

const AunthenticatedRoutes = (props) =>
  <div>
    <Route path='/asum' exact component={AccountSummary} />
    <Route path='/offers' component={MerchantOffers} />
    <Route path='/gameHome' component={GameHome} />
    <Route path='/gameCam' component={GameCam} />
    <Route path='/tasks' component={Tasks} />
    <Route path='/leaderboard' component={LeaderBoard} />
  </div>;

class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user)
        this.props.dispatch(loginUser(user));
      else
        this.props.dispatch(loginUser({}))
    });
  }

  render() {
    const { userInfo } = this.props;
    console.log(this.props)
    return (
      <div className="App">
        <MuiThemeProvider theme={muiTheme}>
          <BrowserRouter>
            <div>
              <Header user={userInfo} />
              {userInfo.displayName ? (<AunthenticatedRoutes />) : (<div />)}
              <Route path='/' exact component={Home} />
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