import React from 'react';

const Footer = () => (
  <div>
    <nav id="nav-wrap" className="opaque">
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
    </nav>
  </div>
);

export default Footer;
