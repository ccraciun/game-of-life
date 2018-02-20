import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './Game';

class App extends Component {
  render() {
    return (
      <Game
        height={10}
        width={10}
      />
    );
  }
}

export default App;
