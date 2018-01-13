import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import profilePic from './assets/profilePic.png';

const burgerToggle = () => {
  const linksEl = document.querySelector('.narrowLinks');
  if (linksEl.style.display === 'block') {
    linksEl.style.display = 'none';
  } else {
    linksEl.style.display = 'block';
  }
};

const App = () => (
  <Router>
    <div>
      <header id="home" className="height: 753px;">
        <nav id="nav-wrap" className="opaque">
          <ul id="navWide" className="nav">
            <li>
              <a className="smoothscroll" href="#home">
                HOME
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                ABOUT
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#work">
                WORK
              </a>
              <a className="smoothscroll" href="#interests">
                INTERESTS
              </a>
              <a className="smoothscroll" href="#portfolio">
                PORTFOLIO
              </a>
            </li>
          </ul>
          <ul id="navNarrow" className="nav">
            <i className="fa fa-bars fa-2x" onClick={burgerToggle} />
            <div className="narrowLinks">
              <li>
                <a href="#home" onClick={burgerToggle}>
                  HOME
                </a>
              </li>
              <li>
                <a href="#about" onClick={burgerToggle}>
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#work" onClick={burgerToggle}>
                  WORK
                </a>
              </li>
              <li>
                <a href="#interests" onClick={burgerToggle}>
                  INTERESTS
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={burgerToggle}>
                  PORTFOLIO
                </a>
              </li>
            </div>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
            <h2 className="responsive-headline">Laurel Herting</h2>
          </div>
          <div>
            <ul className="social">
              <li>
                <a href="skype: +xxxxxxxxxx">
                  <i className="fa fa-phone" />
                </a>
                <a href="mailto:-.-@gmail.com">
                  <i className="fa fa-envelope" />
                </a>
                <a href="https://linkedin.com/in/laurelherting">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
                <a href="https://github.com/laurelherting">
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
                <a href="https://stackoverflow.com/users/8473290/lherting">
                  <i className="fa fa-stack-overflow" />
                </a>
                <a href="https://www.quora.com/profile/Laurel-Herting">
                  <i className="fa fa-quora" />
                </a>
                <a href="https://hub.docker.com/u/lherting">
                  <i className="fa fa-docker" />
                </a>
              </li>
            </ul>
          </div>
          <div id="go-bottom">
            <a className="smoothscroll" title="go-to-bottom" href="#about">
              <i className="fa fa-chevron-down" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>
      <div>
        <section id="about">
          <div className="row">
            <div className="two columns">
              <img
                src={profilePic}
                className="profilePic"
                alt="Laurel Herting"
              />
            </div>
            <div className="ten columns main-col">
              <h3>About Me</h3>
              <p>
                Diligent, results-driven, detailed, and articulate software
                developer with participation creating solid application
                architecture and coding. Passionate about problem-solving in
                order to understand abstact concepts through strong research
                skills resulting in innovative solutions.
              </p>
              <p>
                Excellent written and verbal communication skills while
                maintaining a positive attitude. Great at time and task
                management, quick learning ability for deep and broad technical
                exposure. Confident, up-to-date team player determined to
                achieve high end user focus.
              </p>
              <h3>Contact Details</h3>
              <p className="address">
                <span>Denver, Colorado USA</span>
              </p>
            </div>
          </div>
        </section>
        <section id="work">
          <div className="row work">
            <div className="two columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className="ten columns main-col">
              <h4>Harmon Software Solutions</h4>
              <p className="info">Software Developer</p>
              <p>
                Involved in end-to-end development of a new product from the
                ground up, using AWS, React, and Node.js.
              </p>
            </div>
            <hr />
          </div>
        </section>
        <section id="interests">
          <div className="row interests">
            <div className="two columns header-col">
              <h1>
                <span>Interests</span>
              </h1>
            </div>
            <div className="ten columns main-col">
              <h4>Programming Languages</h4>
              <p className="interest-summary">
                Worked primarily with Javascript, with framewrorks such as
                React.js and Express.js.
              </p>
              <p className="interest-summary">
                Interested in functional programming.
              </p>
            </div>
            <hr />
          </div>
        </section>
        <section id="portfolio">
          <div className="row">
            <h1>Portfolio</h1>
          </div>
          <div className="portfolioItem" />
        </section>
        <footer>
          <div className="row">
            <ul className="social">
              <li>
                <a href="skype: +xxxxxxxxxx">
                  <i className="fa fa-phone" />
                </a>
                <a href="mailto:-.-@gmail.com">
                  <i className="fa fa-envelope" />
                </a>
                <a href="https://linkedin.com/in/laurelherting">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
                <a href="https://github.com/laurelherting">
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
                <a href="https://stackoverflow.com/users/8473290/lherting">
                  <i className="fa fa-stack-overflow" />
                </a>
                <a href="https://www.quora.com/profile/Laurel-Herting">
                  <i className="fa fa-quora" />
                </a>
                <a href="https://hub.docker.com/u/lherting">
                  <i className="fa fa-docker" />
                </a>
              </li>
            </ul>
            <ul className="copyright">
              <li>
                <p> This site is developed in React.js by Laurel Herting </p>
              </li>
            </ul>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="fa fa-chevron-circle-up" aria-hidden="true" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </Router>
);

export default App;
