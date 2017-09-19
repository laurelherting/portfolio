import React from 'react';
import {
  BrowserRouter,
  Router
} from 'react-router-dom';
import Main from './src/components/main';
import Home from './src/app';
import NotFound from './components/errors/not_found';
import IndexRoute from 'ReactRouter.IndexRoute';
import config from 'react-global-configuration';

class Routes extends React.Component {
  render() {
        return (
          <div>
          <div>{ config.get('foo') }</div>
          {/* console.log('Routes', Routes); */}         
            <Router history={browserHistory}>
                <Route path='/' component={Main}>
                    <IndexRoute config={config} component={App}/>
          {/* console.log('Routes ', JSON.stringify(Routes)); */}
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router> 
          </div>
        );
    }
};

export default Routes;
