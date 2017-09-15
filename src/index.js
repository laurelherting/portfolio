import React from 'react';
import ReactDOM from 'react-dom';
import './src/css/default.css';
import './src/css/layout.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
