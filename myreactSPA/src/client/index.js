import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from '../common/routes';
import './index.less';
import  store from '../redux/configStore.js';


ReactDOM.render(
  <Provider store={store}>
    { routes }
  </Provider>,
  document.getElementById('root')
);