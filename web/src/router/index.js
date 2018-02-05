import React from 'react'
import {Route} from 'react-router'




//龙飞宇
import HomeComponent from '../components/home/homeComponent'
// import ClassifyComponent from '../components/classify/classifyComponent'

//冯志伟
import GoodslistComponent from '../components/goodslist/goodslistComponent'
import DetailsComponent from '../components/details/detailsComponent'
import CartComponent from '../components/cart/cartComponent'

//韦职丽
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
        <Route path = '/details' component={DetailsComponent}/>
        <Route path = '/cart' component={CartComponent}/>
    </Route>

)
export default routes;