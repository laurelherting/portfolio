import React from 'react';
import ReactDOM from 'react-dom'

import config from './config';

import Main from './components/main';
import Home from './components/home';

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
