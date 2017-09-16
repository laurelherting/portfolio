import React from 'react';
import {
  BrowserRouter,
  Routes
} from 'react-router-dom';
import Main from './src/components/main';
import Home from './src/app';
import NotFound from './components/errors/not_found';

class Routes extends Component {
  render() {
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
