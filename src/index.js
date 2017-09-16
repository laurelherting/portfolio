import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './default.css';
import './layout.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
