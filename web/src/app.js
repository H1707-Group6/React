import React from 'react'
import ReactDOM from 'react-dom'
import {Router,hashHistory} from 'react-router'
import {Provider} from 'react-redux'

import './sass/base.scss';


import store from './rudex/configStore'
import routes from './router'

ReactDOM.render(
    <Provider store = {store}>
        <Router history = {hashHistory} routes={routes}></Router>
    </Provider>,
    document.getElementById('app')
)