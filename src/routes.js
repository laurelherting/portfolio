import React from 'react';
import ReactRouter from 'react-router';

import Main from './src/components/main';
import Home from './src/app';
import NotFound from './components/errors/not_found';

import IndexRoute from ReactRouter.IndexRoute;
import browserHistory from ReactRouter.browserHistory;

class Routes = {
    get: function (config) {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Main}>
                    <IndexRoute config={config} component={Home}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        );
    }
};

export default Routes;
