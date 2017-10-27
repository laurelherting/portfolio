import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import './App.css';

const App = () => (
<Router>
    <div>
        <header id="home" className="height: 753px;">
            ::before
            <nav id="nav-wrap" className="opaque">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                ::before
                "Show navigation"
                ::after
                </a>
                <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                <div className="App">
                    <ul id="nav" className="nav">
                        <li>
                            <a className="smoothscroll" href="#home">HOME</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#about">ABOUT</a>
                        </li>
                        <li>
                        <a className="smoothscroll" href="interests">INTERESTS</a>
                        </li>
                        <li>
                        <a className="smoothscroll" href="links">LINKS</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="row banner">
                ::before
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
            </div>
        </header>
    </div>
</Router>
);

export default App;
