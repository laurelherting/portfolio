import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import background from './assets/background.JPG';
import Image from 'react-image-resizer';
// import Link from './link';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <img src={background} alt="" class="Background" width={1297} height={710} />
          <nav id="nav-wrap" class="opaque">
          </nav>
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
