import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './routes/Home';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <div>
            <Route path='/' component={Home} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
