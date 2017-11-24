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
import configureStore from './store/storeConfig';
import { loginUser } from './actions/index';

const store = configureStore();
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
    firebase.auth().onAuthStateChanged(({ displayName }) => {
      this.props.dispatch(loginUser({ displayName }))});
  }

  render() {
    const { user } = this.props;
    return (
      <div className="App">
        <MuiThemeProvider theme={muiTheme}>
          <BrowserRouter>
            <div>
              <Header user={user}/>
              <Switch>
                <AunthenticatedRoutes />
                <Route path='/home' exact component={Home} />
              </Switch>
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