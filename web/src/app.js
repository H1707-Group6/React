import React from 'react'
import ReactDOM from 'react-dom'
import {Router,hashHistory} from 'react-router'
import {Provider} from 'react-redux'

// import store from './rudex/configStore'

import '../node_modules/antd-mobile/dist/antd-mobile.css';
import "../node_modules/antd/dist/antd.css"
import './sass/base.scss';


import routes from './router'
import store from './rudex/configStore'

ReactDOM.render(
    <Provider store = {store}>
        <Router history = {hashHistory} routes={routes}></Router>
    </Provider>,
    document.getElementById('app')
)