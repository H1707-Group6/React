import {combineReducers} from 'redux'
//韦职丽
import login from '../components/login/loginReducer'
import register from '../components/register/registerReducer'
//冯志伟
import goodslist from '../components/goodslist/goodslistReducer'
import details from '../components/details/detailsReducer'
import cart from '../components/cart/cartReducer'

//龙飞宇
import home from '../components/home/homeReducer'
import classify from '../components/classify/classifyReducer'

export default combineReducers({
    goodslist,
    details,
    cart,
    home,
    classify,
    login,
    register

})