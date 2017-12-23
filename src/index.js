import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './components/landing';
import { Provider } from 'react-redux';
import store from './store'; 
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Landing />
</Provider>, document.getElementById('root'));
registerServiceWorker();
