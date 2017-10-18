import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import './App.css';

const App = () => (
<Router>
    <div>

        <div className="App">
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>INTERESTS</li>
                <li>LINKS</li>
            </ul>
        </div>

        <div>
            <h2>Laurel Herting</h2>
        </div>

        <div>
            <ul>
                <li>
                    <a href="https://github.com/laurelherting">
                        <i className="fa fa-github" aria-hidden="true" />
                    </a>
                    <a href="https://linkedin.com/in/laurelherting">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                </li>
            </ul>
        </div>

    </div>
</Router>
);

export default App;
