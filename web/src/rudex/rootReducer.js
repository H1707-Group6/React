import {combineReducers} from 'redux'
//韦职丽
import login from '../components/login/loginReducer'
import register from '../components/register/registerReducer'
import nopay from '../components/nopay/nopayReducer'
import order from '../components/order/orderReducer'
import mine from '../components/mine/mineReducer'
import allorder from '../components/allorder/allorderReducer'
import pay from '../components/pay/payReducer'
//冯志伟
import goodslist from '../components/goodslist/goodslistReducer'
import details from '../components/details/detailsReducer'
import cart from '../components/cart/cartReducer'

//龙飞宇
import home from '../components/home/homeReducer'
import classify from '../components/classify/classifyReducer'
import search from '../components/homeSearch/SearchReducer'

export default combineReducers({
    goodslist,
    details,
    cart,
    home,
    classify,
    search,
    login,
    register,
    nopay,
    order,
    mine,
    allorder,
    pay


})