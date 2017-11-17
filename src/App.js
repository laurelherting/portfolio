import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import profilePic from './assets/profilePic.png';

const App = () => (
<Router>
    <div>
        <header id="home" className="height: 753px;">
            <nav id="nav-wrap" className="opaque">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                </a>
                <a className="mobile-btn" href="#" title="Hide navigation"></a>
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
                <a className="smoothscroll" href="#about">
                <i className="fa fa-arrow-circle-down" aria-hidden="true">
                </i>
                </a>
            </div>
        </header>
        <div>
            <section id="about">
                <div className="row">
                    <div className="two columns">
                        <img src={profilePic} className="profilePic" alt="Laurel Herting" />
                    </div>
                    <div className="ten columns main-col">
                        <h3>About Me</h3>
                        <p>
                            Diligent, results-driven, detailed, and articulate software developer with participation creating solid application architecture and coding. Passionate about problem-solving in order to understand abstact concepts through strong research skills resulting in innovative solutions.
                        </p>
                        <p>
                        Excellent written and verbal communication skills while maintaining a positive attitude. Great at time and task management, quick learning ability for deep and broad technical exposure. Confident, up-to-date team player determined to achieve high end user focus.
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h3>Contact Details</h3>
                                <p className="address">
                                    <span>Denver, Colorado USA</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="work">
                <div className="row work">
                    <div className="two columns header-col">
                        <h1>
                            Work
                        </h1>
                    </div>
                    <div className="ten columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h4>
                                    <a href="">Harmon Software Solutions</a>
                                </h4>
                                <p className="info">
                                    Software Developer
                                </p>
                            </div>
                        </div>
                    </div>
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
                            <div className="row inside">
                                <h4>Programming Languages</h4>
                            </div>
                        </div>
                </div>
            </section>
        </div>
    </div>
</Router>
);

export default App;
