import React from 'react';

const burgerToggle = () => {
  const linksEl = document.querySelector('.narrowLinks');
  if (linksEl.style.display === 'block') {
    linksEl.style.display = 'none';
  } else {
    linksEl.style.display = 'block';
  }
};

const Header = () => (
  <header id="home" className="height: 753px;">
    <nav id="nav-wrap" className="opaque">
      <ul id="navWide" className="nav">
        <div className="wideDiv">
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
          </li>
          <li>
            <a className="smoothscroll" href="#interests">
              INTERESTS
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              PORTFOLIO
            </a>
          </li>
        </div>
      </ul>
      <ul id="navNarrow" className="nav">
        <button onClick={burgerToggle}>
          <i className="fa fa-bars fa-2x" />
        </button>
        <div className="narrowLinks" style={{ display: 'none' }}>
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
            <a href="https://hub.docker.com/u/lherting/">
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
    <rowBanner />
  </header>
);

export default Header;
