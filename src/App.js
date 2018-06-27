import React, { Component } from 'react';
import Navbar from './Navbar.js';
import MemoryGame from './memorygame.js';

class App extends Component {

  render() {

    return (
      <div className="App">
          <Navbar />
          <MemoryGame />
      </div>
    );
  }
}

export default App;
