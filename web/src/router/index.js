import React from 'react'
import {Route} from 'react-router'

import HomeComponent from '../components/home/homeComponent'
import GoodslistComponent from '../components/goodslist/goodslistComponent'
import LoginComponent from '../components/login/loginComponent'
import RegisterComponent from '../components/register/registerComponent'
import OrderComponent from '../components/order/orderComponent'


const routes = (
    <Route>
        <Route path = '/' component={HomeComponent}/>
        <Route path = 'goodslist' component={GoodslistComponent}/>
        <Route path = 'login' component={LoginComponent}/>
        <Route path = 'register' component={RegisterComponent}/>
        <Route path = 'order' component={OrderComponent}/>
    </Route>

)

export default routes;