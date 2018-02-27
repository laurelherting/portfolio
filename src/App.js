import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import Header from './components/header.js';
import rowBanner from './components/rowBanner.js';
import About from './components/about.js';
import Work from './components/work.js';
import Footer from './components/footer.js';
import Interests from './components/interests.js';
import Portfolio from './components/portfolio.js';

const App = () => (
  <Router>
    <div>
      <Header />
      <rowBanner />
      <About />
      <Work />
      <Interests />
      <Portfolio />
      <Footer />
    </div>
  </Router>
);

export default App;
