import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './routes/Home';
import LeaderBoard from './routes/Leaderboard';
import AccountSummary from './routes/AccountSummary';
import MerchantOffers from './components/customer/merchantOffers';
import GameHome from './routes/gameHome';
import Tasks from './components/customer/tasks';
import GameCam from './components/GameCam';
import { BrowserRouter, Route } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPalette from 'material-ui/styles/createPalette'
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import {blue, amber, red} from 'material-ui/colors';

import { Provider } from 'react-redux';
import configureStore from './store/storeConfig';

const store = configureStore();
const muiTheme = createMuiTheme({
  palette: createPalette({
    primary: blue,
    accent: amber,
    error: red,
    type: 'light'
  })
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <MuiThemeProvider theme={muiTheme}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/home' component={Home} />
              <Route path='/asum' component={AccountSummary} />
              <Route path='/offers' component={MerchantOffers} />
              <Route path='/gameInfo' component={GameHome} />
              <Route path='/gameCam' component={GameCam} />
              <Route path='/tasks' component={Tasks} />
              <Route path='/leaderboard' component={LeaderBoard} />
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
      </Provider>
    );
  }
}

export default App;
