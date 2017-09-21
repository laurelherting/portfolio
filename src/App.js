import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import background from './assets/background.JPG';

console.log(background); //background.JPG

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <img src={background} alt="" class="Background"/>
          <h2>Laurel Herting</h2>
        </div>
        <p className="App-intro">
        </p>
      </div>
      </Router>
    );
  }
}

export default App;
