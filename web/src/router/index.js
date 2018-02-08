import React from 'react'
import {Route} from 'react-router'

//龙飞宇
import HomeComponent from '../components/home/homeComponent'
import ClassifyComponent from '../components/classify/classifyComponent'

//冯志伟
import GoodslistComponent from '../components/goodslist/goodslistComponent'
import DetailsComponent from '../components/details/detailsComponent'
import CartComponent from '../components/cart/cartComponent'

//韦职丽
import LoginComponent from '../components/login/loginComponent'
import RegisterComponent from '../components/register/registerComponent'
import OrderComponent from '../components/order/orderComponent'
import MineComponent from '../components/mine/mineComponent'
import NopayComponent from '../components/nopay/nopayComponent'
import AllorderComponent from '../components/allorder/allorderComponent'

const routes = (
    <Route>
        <Route path = '/' component={HomeComponent}/>
        <Route path = '/classify' component={ClassifyComponent}/>
        <Route path = 'goodslist' component={GoodslistComponent}/>
        <Route path = 'login' component={LoginComponent}/>
        <Route path = 'register' component={RegisterComponent}/>
        <Route path = 'order' component={OrderComponent}/>
        <Route path = 'mine' component={MineComponent}/>
        <Route path = 'nopay' component={NopayComponent}/>
        <Route path = 'allorder' component={AllorderComponent}/>
        <Route path = '/details' component={DetailsComponent}/>
        <Route path = 'cart(/:id)' component={CartComponent}/>
    </Route>

)
export default routes;