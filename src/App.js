import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './routes/Home';
import AccountSummary from './routes/AccountSummary';
import MerchantOffers from './components/customer/merchantOffers';
import GameHome from './containers/gameHome';
import Tasks from './components/customer/tasks';
import GameCam from './components/GameCam';
import { BrowserRouter, Route } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPalette from 'material-ui/styles/createPalette'
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import {blue, amber, red} from 'material-ui/colors'

const muiTheme = createMuiTheme({
  palette: createPalette({
    primary: blue,
    accent: amber,
    error: red,
    type: 'light'
  })
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={muiTheme}>
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/home' component={Home} />
              <Route path='/asum' component={AccountSummary} />
              <Route path='/offers' component={MerchantOffers} />
              <Route path='/gameInfo' component={GameHome} />
              <Route path='/gameCam' component={GameCam} />
              <Route path='/tasks' component={Tasks} />
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
