import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

import config from './Config';

import Main from './components/Main';
import Home from './components/Home';

import Router from ReactRouter.Router;
import Route from ReactRouter.Route;
import IndexRoute from ReactRouter.IndexRoute;
import { BrowserRouter, Route, browserHistory } from 'react-router-dom'

export default = (
    <Router history={browserHistory}>
        <Route path='/' component={Main}>
            <IndexRoute resume={config.path.resume} component={Home}/>
            {/* <Route path='*' component={ErrorPages.NOT_FOUND}/> */}
        </Route>
    </Router>
);
